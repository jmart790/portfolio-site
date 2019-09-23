import React from 'react'
import './welcome.css'

function Welcome() {
  return (
    <div className='welcome-container container'>
      <div className='welcome-text'>
        <h1>Hi there, I'm Josh</h1>
      </div>
      <div className='professional-label'>
        <p>Software Developer</p>
        <p>Problem Solver</p>
        <p>Maker of cool things</p>
      </div>
      <div className='call-to-action'>v</div>

      <div className='bitmoji'>
        <img src={require('./wave-pose.jpeg')} alt='wave pose' />
      </div>
    </div>
  )
}

export default Welcome
