import nodemailer from 'nodemailer';

export default async (req, res) => {
  console.log('🔥 /api/contact hit');

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(chunk);
  }
  const rawBody = Buffer.concat(chunks).toString();
  let data;

  try {
    data = JSON.parse(rawBody);
  } catch (e) {
    console.log('❌ JSON parse failed:', e);
    return res.status(400).json({ error: 'Invalid JSON in request body' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!data.name || !data.email || !data.message || !data.service) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.in',
    port: 465,
    secure: true,
    auth: {
      user: process.env.ZOHO_USER,
      pass: process.env.ZOHO_PASS,
    },
    tls: { rejectUnauthorized: false },
  });

  const getAdminEmailContent = (data) => `
    <div style="font-family: Arial; padding: 20px;">
      <h2>📩 New Contact Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Address:</strong> ${data.address || 'Not provided'}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    </div>
  `;

  const getUserEmailContent = (name) => `
    <div style="font-family: Arial; padding: 20px;">
      <h2>Thank you for contacting Quaff Global Services</h2>
      <p>Hi ${name},</p>
      <p>We’ve received your inquiry and will get back to you within 24 hours.</p>
      <p>Regards,<br/>Team Quaff</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Quaff" <${process.env.ZOHO_USER}>`,
      to: process.env.ZOHO_USER,
      subject: 'New Contact Form Submission',
      html: getAdminEmailContent(data),
    });

    await transporter.sendMail({
      from: `"Quaff" <${process.env.ZOHO_USER}>`,
      to: data.email,
      subject: 'We received your inquiry!',
      html: getUserEmailContent(data.name),
      replyTo: process.env.ZOHO_USER,
    });

    console.log('✅ Emails sent');
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Email send failed:', error);
    return res.status(500).json({ error: 'Email send failed', details: error.message });
  }
};
