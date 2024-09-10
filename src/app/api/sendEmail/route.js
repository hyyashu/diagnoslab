import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(request) {
  try {
    const { email, subject, message } = await request.json();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port: parseInt(process.env.SMTP_PORT || "465", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "admin@diagnoslab.in",
        pass: process.env.SMTP_PASS || "Verify@1313",
      },
    });
    await transporter.sendMail({
      from: `"Diagnos Lab" <admin@diagnoslab.in>`,
      to: "care@diagnoslab.in",
      subject: subject || "No Subject",
      text: message || "No Text",
      html: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email" }), { status: 500 });
  }
}
