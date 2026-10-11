import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let data: Record<string, any> = {};
    let uploadedFile: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      data.name = formData.get("name")?.toString() || "";
      data.phone = formData.get("phone")?.toString() || "";
      data.email = formData.get("email")?.toString() || "";
      data.cloudLink = formData.get("cloudLink")?.toString() || "";
      data.message = formData.get("message")?.toString() || "";
      data.utm_source = formData.get("utm_source")?.toString() || "direct";

      const fileField = formData.get("file");
      if (fileField && typeof fileField === "object" && "arrayBuffer" in fileField) {
        uploadedFile = fileField as File;
      }
    } else {
      data = await req.json();
    }

    // Надежный генератор уникального номера заявки (например, ДИ-749281)
    const uniqueNumber = Math.floor(100000 + Math.random() * 900000);
    const humanId = `ДИ-${uniqueNumber}`;
    const timestamp = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });

    // Обработка загруженного файла
    let fileUrl = "";
    let fileName = "";
    let fileBase64 = "";
    let fileMimeType = "";

    if (uploadedFile && uploadedFile.size > 0) {
      fileName = uploadedFile.name;
      fileMimeType = uploadedFile.type || "application/octet-stream";
      const bytes = await uploadedFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // 1. Сохраняем локально в public/uploads
      const cleanFileName = fileName.replace(/[^a-zA-Z0-9._\u0400-\u04FF-]/g, "_");
      const safeFileName = `${humanId}_${cleanFileName}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      
      try {
        await fs.mkdir(uploadDir, { recursive: true });
        await fs.writeFile(path.join(uploadDir, safeFileName), buffer);
        fileUrl = `/uploads/${encodeURIComponent(safeFileName)}`;
      } catch (err) {
        console.error("Ошибка при локальном сохранении файла:", err);
      }

      // Для передачи в Google Apps Script (если размер до 12 МБ)
      if (uploadedFile.size <= 12 * 1024 * 1024) {
        fileBase64 = buffer.toString("base64");
      }
    }

    const lead = {
      id: humanId,
      rawId: Date.now(),
      createdAt: timestamp,
      name: data.name || "Не указано",
      phone: data.phone || "Не указано",
      email: data.email || "Не указано",
      link: data.cloudLink || "",
      file: fileUrl || fileName || "",
      fileName: fileName,
      message: data.message || "",
      utm_source: data.utm_source || "direct",
    };

    console.log(`=== [ДиАйСтрой] Новая заявка [${humanId}] ===`);
    console.log(lead);
    console.log("=========================================");

    // 1. Сохраняем в локальный реестр leads.json
    try {
      const leadsFilePath = path.join(process.cwd(), "leads.json");
      let existingLeads: any[] = [];
      try {
        const fileContent = await fs.readFile(leadsFilePath, "utf-8");
        existingLeads = JSON.parse(fileContent);
      } catch {
        existingLeads = [];
      }
      existingLeads.unshift(lead);
      await fs.writeFile(leadsFilePath, JSON.stringify(existingLeads, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("Не удалось записать в leads.json:", fsErr);
    }

    // 2. Отправка в Google Таблицу (порядок колонок: ID, Имя/Компания, Телефон, Email, Link, File, Комментарий)
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetWebhookUrl) {
      try {
        const payloadToSheet = {
          id: lead.id,
          name: lead.name,
          phone: lead.phone,
          email: lead.email,
          link: lead.link,
          file: lead.file,
          message: lead.message,
          fileName: fileName,
          fileBase64: fileBase64,
          mimeType: fileMimeType,
          createdAt: lead.createdAt,
        };

        await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(payloadToSheet),
          redirect: "follow",
        });
      } catch (sheetErr) {
        console.error("Ошибка при отправке в Google Таблицу:", sheetErr);
      }
    }

    // 3. Отправка в Telegram (если настроен)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      try {
        const text = `🏗 <b>НОВАЯ ЗАЯВКА НА РАСЧЕТ [${humanId}]</b>\n\n` +
          `👤 <b>Имя/Компания:</b> ${escapeHtml(lead.name)}\n` +
          `📞 <b>Телефон:</b> <a href="tel:${lead.phone}">${escapeHtml(lead.phone)}</a>\n` +
          `✉️ <b>Email:</b> <a href="mailto:${lead.email}">${escapeHtml(lead.email)}</a>\n` +
          (lead.link ? `🔗 <b>Облако (ТЗ):</b> <a href="${lead.link}">${escapeHtml(lead.link)}</a>\n` : "") +
          (fileName ? `📎 <b>Прикреплен файл:</b> ${escapeHtml(fileName)}\n` : "") +
          (lead.message ? `💬 <b>Комментарий:</b>\n<i>${escapeHtml(lead.message)}</i>\n` : "") +
          `\n⏱ <i>Время: ${timestamp}</i>`;

        await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: telegramChatId,
            text: text,
            parse_mode: "HTML",
            disable_web_page_preview: false,
          }),
        });
      } catch (tgErr) {
        console.error("Ошибка при отправке в Telegram:", tgErr);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: "Заявка успешно принята",
      leadId: humanId,
      fileUrl: fileUrl
    });
  } catch (error) {
    console.error("Ошибка при обработке заявки:", error);
    return NextResponse.json({ success: false, error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
