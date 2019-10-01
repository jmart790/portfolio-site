import React, { useState } from 'react'
import useInput from '../hooks/useInput'
import './contact-me.css'

function ContactMe() {
  const [name, bindName, resetName] = useInput('')
  const [email, bindEmail, resetEmail] = useInput('')
  const [message, bindMessage, resetMessage] = useInput('')
  const [submitted, setSubmitted] = useState(false)
  const [reply, setReply] = useState('')
  const TOPIC = 'MY_SITE_MESSAGE'
  const RECIPIENT = 'jmart790@fiu.edu'

  const validateEmail = email => /\S+@\S+\.\S+/.test(email)

  const handleReply = n => {
    const firstName = n.split(' ')[0]
    const reply = `Talk to you soon ${firstName}`
    setReply(reply)
  }

  const sendEmail = _ => {
    fetch(
      `http://127.0.0.1:3001/send-email?recipient=${RECIPIENT}&sender=${email}&topic=${TOPIC}&text=${message}`
    ).catch(err => console.log(err))
    console.log('sent email', RECIPIENT)
  }

  const submitHandler = e => {
    e.preventDefault()
    const cName = name.trim()
    const cEmail = email.trim()
    const cMessage = message.trim()
    if (cName.length > 0 && cEmail.length > 0 && cMessage.length > 0) {
      if (validateEmail(cEmail)) {
        handleReply(cName)
        setSubmitted(true)
        // sendEmail()
        resetName()
        resetEmail()
        resetMessage()
      } else {
        alert('Sorry, you must enter a valid email address.')
      }
    } else {
      alert('Sorry, all fields must be filled out.')
    }
  }

  return (
    <div className='contact-me-container container'>
      <div className='contact-me-label'>
        <h1>Contact Me</h1>
      </div>
      <div className='contact-form'>
        <form className='form' onSubmit={submitHandler}>
          <p className='input-container' type='text' name='Name'>
            <input placeholder='Write your name here...' {...bindName} />
          </p>
          <p className='input-container' type='email' name='Email'>
            <input placeholder='Let me know how to contact you back...' {...bindEmail} />
          </p>
          <p className='input-container' type='text' name='Message'>
            <input placeholder='What would you like to tell me...' {...bindMessage} />
          </p>
          <div className='submit-area'>
            <img
              className={`talksoon ${submitted ? 'show' : 'hide'}`}
              src={require('./images/talksoon.png')}
              alt='talksoon'
            />

            <div
              className={`talk-bubble-blue tri-left round left-in ${submitted ? 'show' : 'hide'}`}
            >
              <div className='talktext'>
                <p>{reply}</p>
              </div>
            </div>

            <button className='form-btn'>Send</button>
          </div>
        </form>
      </div>

      <div className='footer'>
        <a href='https://www.linkedin.com/in/joshualeemartinez/'>
          <img className='linkedin' src={require('./images/LinkedIn.png')} alt='linkedin' />
        </a>
        <div className='thanks'>
          Thank you for <br />
          stopping by
        </div>
        <a href='https://github.com/jmart790/'>
          <img className='github' src={require('./images/git.png')} alt='Github' />
        </a>
      </div>
    </div>
  )
}

export default ContactMe
