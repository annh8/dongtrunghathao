const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
// Configure the email transport using the default SMTP transport and a GMail account.
// For Gmail, enable these:
// 1. https://www.google.com/settings/security/lesssecureapps
// 2. https://accounts.google.com/DisplayUnlockCaptcha
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

// Your company name to include in the emails
// TODO: Change this to your app or company name to customize the email sent.
const APP_NAME = 'Cloud Storage for Firebase quickstart';
// Sends a welcome email to the given user.
function sendWelcomeEmail(email, subject, content) {
  const mailOptions = {
    from: 'mr.hoaan@gmail.com',
    to: email,
    subject:'',
    text:''
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `${subject}`;
  mailOptions.text = `${content || ''}`;
  return mailTransport.sendMail(mailOptions).then(() => {
    return console.log('New welcome email sent to:', email);
  });
}

exports.function = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    
    sendWelcomeEmail(req.body.to, req.body.subject,req.body.content);
    res.send(req.body.to);
  });
});
