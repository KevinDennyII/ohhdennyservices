
import nodemailer from 'nodemailer';
import type { ContactInput } from '@shared/routes';
import { escapeHtml } from './security';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(data: ContactInput) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : null;
  const safeMessage = escapeHtml(data.message);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${data.name}`,
    text: [
      'You have a new contact form submission:',
      '',
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : null,
      '',
      'Message:',
      data.message,
    ]
      .filter(Boolean)
      .join('\n'),
    html: `
      <p>You have a new contact form submission:</p>
      <ul>
        <li><strong>Name:</strong> ${safeName}</li>
        <li><strong>Email:</strong> ${safeEmail}</li>
        ${safePhone ? `<li><strong>Phone:</strong> ${safePhone}</li>` : ''}
        <li><strong>Message:</strong></li>
      </ul>
      <p>${safeMessage.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
