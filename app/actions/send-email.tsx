"use server"

export async function sendContactEmail(formData: {
  name: string
  company: string
  contact: string
  message: string
}) {
  try {
    // Using Resend API for email delivery
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "FTS Website <noreply@fts24.ru>",
        to: ["sales@fts24.ru"],
        subject: `Новая заявка с сайта от ${formData.name}`,
        html: `
          <h2>Новая заявка с сайта ООО «ФТС»</h2>
          <p><strong>Имя:</strong> ${formData.name}</p>
          <p><strong>Компания:</strong> ${formData.company || "Не указана"}</p>
          <p><strong>Контакт:</strong> ${formData.contact}</p>
          <p><strong>Сообщение:</strong></p>
          <p>${formData.message || "Не указано"}</p>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[v0] Email send error:", error)
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
