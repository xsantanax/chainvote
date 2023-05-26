import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  const html1 = `<div>
  <div>Thank you for using Chainvote!</div>
  <div>You are voting in ${req.body.theirEmail}.</div>
  <div>To confirm your vote, click here. </div>
  <div>To access the app, <a href='www.google.com'>click here</a>. </div>
  </div>`

  const html2 = `<div>
  <div>You received a vote from ${req.body.yourEmail} in Chainvote!</div>
  <div>Check out your profile.</div>
  <div>There you can see your votes, add your name and a picture, and also vote in someone else.</div>
  <div>To access the app, click here. </div>
  </div>`

  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: req.body.yourEmail, // Your email where you'll receive emails
      from: 'noreply@rafaelsantana.pro', // your website email address here
      subject: 'Confirm your chosen one.',
      html: html1
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  try {
    await sendgrid.send({
      to: req.body.theirEmail,
      from: 'noreply@rafaelsantana.pro',
      subject: req.body.yourEmail + 'chose you.',
      html: html2
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
