// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'rajprajapat99@gmail.com',
//     pass: 'Raj@900267',
//   },
// });

// app.post('/send_email', (req, res) => {
//   const formData = req.body;
//   const mailOptions = {
//     from: formData.email,
//     to: formData.recipientEmail,
//     subject: formData.emailSubject,
//     text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.status(500).json({ error: 'Email not sent' });
//     } else {
//       console.log('Email sent: ' + info.response);
//       console.log(mailOptions)
//       res.status(200).json({ success: 'Email sent successfully' });
//     }
//   });
// });

