import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const timestamp = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" });
    const lead = {
      id: Date.now(),
      createdAt: timestamp,
      name: data.name || "Не указано",
      phone: data.phone || "Не указано",
      email: data.email || "Не указано",
      cloudLink: data.cloudLink || "",
      message: data.message || "",
      utm_source: data.utm_source || "direct",
    };

    console.log("=== [ДиАйСтрой] Новая заявка с сайта ===");
    console.log(lead);
    console.log("=========================================");

    // 1. Локальное сохранение в файл (резервная копия — ни одна заявка не потеряется)
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
      console.error("Не удалось сохранить в локальный leads.json:", fsErr);
    }

    // 2. Отправка в Telegram (если настроены переменные окружения)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      try {
        const text = `🏗 <b>НОВАЯ ЗАЯВКА НА РАСЧЕТ СМР</b>\n\n` +
          `👤 <b>Клиент/Компания:</b> ${escapeHtml(lead.name)}\n` +
          `📞 <b>Телефон:</b> <a href="tel:${lead.phone}">${escapeHtml(lead.phone)}</a>\n` +
          `✉️ <b>Email:</b> <a href="mailto:${lead.email}">${escapeHtml(lead.email)}</a>\n` +
          (lead.cloudLink ? `📁 <b>Ссылка на ТЗ / Чертежи:</b> <a href="${lead.cloudLink}">${escapeHtml(lead.cloudLink)}</a>\n` : "") +
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

    // 3. Отправка в Google Таблицу (если настроен Webhook)
    const googleSheetWebhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (googleSheetWebhookUrl) {
      try {
        await fetch(googleSheetWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        });
      } catch (sheetErr) {
        console.error("Ошибка при отправке в Google Таблицу:", sheetErr);
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: "Заявка успешно принята и зарегистрирована",
      leadId: lead.id 
    });
  } catch (error) {
    console.error("Ошибка при обработке заявки:", error);
    return NextResponse.json({ success: false, error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}

// Экранирование спецсимволов для Telegram HTML
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
