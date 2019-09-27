import express from 'express' //needed to launch server
import cors from 'cors' //needed to disable sendgrid security
import { setApiKey, send } from '@sendgrid/mail' //sendgrid library to send emails

const app = express()

setApiKey(process.env.SENDGRID_API_KEY)
// console.log(process.env.SENDGRID_API_KEY)

app.use(cors()) // without it Sendgrid will not send

// welcome
app.get('/', (req, res) => res.send('Welcome to sendgrid email'))

// email page
app.get('/send-email', (req, res) => {
  // get variable from query string=
  const { recipient, sender, topic, text } = req.query
  //sendgrid requirements
  const msg = {
    to: recipient,
    from: sender,
    subject: topic,
    text: text,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }

  const {
    classes: { Mail }
  } = require('@sendgrid/helpers')
  const mail = Mail.create(msg)
  const body = mail.toJSON()
  console.log(body)

  // send email
  send(msg).then(msg => console.log(text))
})

app.listen(3001, () => console.log('running on port 3001'))
