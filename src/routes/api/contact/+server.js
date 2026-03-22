import { json } from "@sveltejs/kit";
import { RESEND_API_KEY } from "$env/static/private";

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return json(
        { success: false, error: "All fields are required." },
        { status: 400 },
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return json(
        { success: false, error: "Invalid email address." },
        { status: 400 },
      );
    }

    // Sanitize input lengths
    if (name.length > 100 || subject.length > 200 || message.length > 5000) {
      return json(
        { success: false, error: "Input exceeds maximum allowed length." },
        { status: 400 },
      );
    }

    // Send via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Use Resend's default sandbox sender until you verify a domain.
        // Once your domain is verified, replace with: 'portfolio@yourdomain.com'
        from: "onboarding@resend.dev",
        to: "alchemistlowkey@gmail.com",
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1B2A4A; border-bottom: 2px solid #0D7377; padding-bottom: 8px;">
              New Portfolio Message
            </h2>
            <table style="width: 100%; margin-bottom: 16px;">
              <tr>
                <td style="padding: 4px 0; color: #718096; width: 80px;">From</td>
                <td style="padding: 4px 0; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #718096;">Email</td>
                <td style="padding: 4px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 4px 0; color: #718096;">Subject</td>
                <td style="padding: 4px 0;">${subject}</td>
              </tr>
            </table>
            <div style="background: #F7FAFC; border-left: 4px solid #0D7377; padding: 16px; border-radius: 4px;">
              <p style="margin: 0; white-space: pre-wrap; color: #2D3748;">${message}</p>
            </div>
            <p style="color: #718096; font-size: 12px; margin-top: 24px;">
              Sent from your portfolio contact form · ${new Date().toUTCString()}
            </p>
          </div>
        `,
      }),
    });

    const data = await res.json();

    // Resend returns 200/201 on success; anything else is a failure
    if (!res.ok) {
      console.error("[Resend Error]", data);
      return json(
        {
          success: false,
          error:
            "Failed to send message. Please try again or email me directly.",
        },
        { status: 500 },
      );
    }

    console.log("[Contact Form Sent]", {
      resend_id: data.id,
      timestamp: new Date().toISOString(),
      from: name,
      email,
      subject,
    });

    return json({
      success: true,
      message:
        "Message transmitted successfully. I will respond within 24 hours.",
    });
  } catch (err) {
    console.error("[Contact API Error]", err);
    return json(
      {
        success: false,
        error: "Internal server error. Please try again later.",
      },
      { status: 500 },
    );
  }
}
