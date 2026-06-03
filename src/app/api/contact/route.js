import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, topic } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Telegram configuration missing" },
        { status: 500 }
      );
    }

    const message = `
🚀 *New Contact Form Submission*
👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone || "Not provided"}
📝 *Topic:* ${topic}
    `;

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await response.json();
      console.error("Telegram API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message to Telegram" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
