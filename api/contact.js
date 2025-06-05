const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  console.log('🔥 /api/contact hit');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  let data;

  try {
    if (!req.body) {
      // Raw body parsing for Vercel
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const rawBody = Buffer.concat(chunks).toString();
      data = JSON.parse(rawBody);
    } else {
      // Some platforms (like local dev with bodyParser) may already provide `req.body`
      data = req.body;
    }
  } catch (e) {
    console.error('❌ Failed to parse JSON body:', e);
    return res.status(400).json({ error: 'Invalid JSON in request body' });
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
    tls: {
      rejectUnauthorized: false,
    },
  });

  const getAdminEmailContent = (data) => `...`; // as you have
  const getUserEmailContent = (name) => `...`; // as you have

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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('❌ Email send failed:', error);
    return res.status(500).json({ error: 'Email send failed', details: error.message });
  }
};
