import nodemailer from "nodemailer";
import type { ContactInput } from "./schema";
import { escapeHtml } from "./html";
import { CONTACT_EMAIL } from "./site";

export async function sendContactEmail(data: ContactInput) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const to = process.env.CONTACT_TO || CONTACT_EMAIL;

  if (!user || !pass) {
    throw new Error("EMAIL_USER and EMAIL_PASS must be set");
  }

  // SMTP auth stays on Gmail; notifications are delivered to the public contact address.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : null;
  const safeMessage = escapeHtml(data.message);

  await transporter.sendMail({
    from: user,
    to,
    replyTo: data.email,
    subject: `New Contact Form Submission from ${data.name}`,
    text: [
      "You have a new contact form submission:",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <p>You have a new contact form submission:</p>
      <ul>
        <li><strong>Name:</strong> ${safeName}</li>
        <li><strong>Email:</strong> ${safeEmail}</li>
        ${safePhone ? `<li><strong>Phone:</strong> ${safePhone}</li>` : ""}
        <li><strong>Message:</strong></li>
      </ul>
      <p>${safeMessage.replace(/\n/g, "<br>")}</p>
    `,
  });
}
