const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

app.post('/api/send-email', (req, res) => {
  const { client_name, client_email, meeting_date, meeting_time, message } = req.body;

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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
