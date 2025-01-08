const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Only POST requests allowed' });
  }

  const { client_name, client_email, meeting_date, meeting_time, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'specified_email@example.com',
    subject: 'New Meeting Booking',
    html: `
      <h2>New Meeting Booking</h2>
      <p><strong>Name:</strong> ${client_name}</p>
      <p><strong>Email:</strong> ${client_email}</p>
      <p><strong>Date:</strong> ${meeting_date}</p>
      <p><strong>Time:</strong> ${meeting_time}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    res.status(500).send(error.toString());
  }
}
