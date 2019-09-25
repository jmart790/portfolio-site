import React from 'react'
import useInput from '../hooks/useInput'
import './contact-me.css'
import './form.css'

function ContactMe() {
  const [name, bindName, resetName] = useInput('')
  const [email, bindEmail, resetEmail] = useInput('')
  const [message, bindMessage, resetMessage] = useInput('')

  const submitHandler = e => {
    e.preventDefault()
    alert(`Hello ${name} \n ${email} \n ${message}`)
    resetName()
    resetEmail()
    resetMessage()
  }

  return (
    <div className='contact-me-container container'>
      <div className='contact-me'>
        <h1>Contact Me</h1>
      </div>
      <div className='contact-form'>
        <form className='form' onSubmit={submitHandler}>
          <p className='input-container' type='Name:'>
            <input placeholder='Write your name here..' {...bindName} />
          </p>
          <p className='input-container' type='Email:'>
            <input placeholder='Let us know how to contact you back..' {...bindEmail} />
          </p>
          <p className='input-container' type='Message:'>
            <input placeholder='What would you like to tell us..' {...bindMessage} />
          </p>
          <button className='form-btn'>Send Message</button>
        </form>
      </div>

      <div className='thank-you'>Thank you for stopping bye</div>
    </div>
  )
}

export default ContactMe
