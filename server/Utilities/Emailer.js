import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_APIKEY);

const Emailer = (email, subject, message) => {
  const msg = {
    to: email,
    from: process.env.SENDER,
    subject: subject,
    text: message,
    html: html
  }

  sgMail.send(msg).catch(err => {
    console.log(err)
  })
}

export default Emailer;