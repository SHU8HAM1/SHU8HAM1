import { TransactionalEmailsApi, SendSmtpEmail } from "@getbrevo/brevo";
import Brevo from "@getbrevo/brevo";

const brevoApiKey = process.env.BREVO_API_KEY || "YOUR_BREVO_API_KEY";
const encryptionKey = process.env.ENCRYPTION_KEY || "YOUR_ENCRYPTION_KEY";

const brevo = new TransactionalEmailsApi();
brevo.setApiKey(Brevo.TransactionalEmailsApiApiKeys.apiKey, brevoApiKey);

export async function POST(req) {
  const { name, email, subject, message } = await req.json();
  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  const sendEmail = new SendSmtpEmail();
  sendEmail.subject = `${name} - ${subject}`;
  sendEmail.htmlContent = `<p><div>${name}</div><div>${email}</div><div>${message}</div></p>`;
  sendEmail.sender = {
    name: "Shubham Garg",
    email: "shubhamgarg2k5@gmail.com",
  };
  sendEmail.to = [{ email: "gargshubham2005@gmail.com" }];

  try {
    await brevo.sendTransacEmail(sendEmail);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
