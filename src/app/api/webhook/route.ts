import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Логируем полученные данные, включая UTM-метки (mock отправки в ERP)
    console.log("=== Новая заявка с сайта 디АйСтрой ===");
    console.log("Данные клиента:", {
      name: data.name,
      company: data.company,
      phone: data.phone,
      email: data.email,
      message: data.message,
      cloud_link: data.cloud_link,
    });
    console.log("UTM-метки:", {
      source: data.utm_source,
      medium: data.utm_medium,
      campaign: data.utm_campaign,
    });
    console.log("======================================");

    // TODO: Здесь должна быть реальная отправка webhook-аста в ERP или CRM
    // await fetch("https://your-erp.ru/api/webhook", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });

    // Имитируем задержку сети
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Заявка успешно отправлена" });
  } catch (error) {
    console.error("Ошибка при обработке webhook:", error);
    return NextResponse.json({ success: false, error: "Внутренняя ошибка сервера" }, { status: 500 });
  }
}
