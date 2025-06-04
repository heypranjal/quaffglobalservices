const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const data = req.body;

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
    tls: {
      rejectUnauthorized: false,
    },
  });

  const getAdminEmailContent = (data) => `
    <div style="font-family: Arial; padding: 20px;">
      <h2>📩 New Contact Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Address:</strong> ${data.address}</p>
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
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email Error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
