import React, { useState, useEffect } from 'react'
import './welcome.css'

function Welcome() {
  const INITIAL_INDEX = 0
  const [index, setIndex] = useState(INITIAL_INDEX)
  const messages = [
    { id: 0, message: 'Hi there!', image: 'landing.png' },
    { id: 1, message: "I'm Josh", image: 'superme.png' },
    { id: 2, message: 'I would describe myself as a...', image: 'thinking.png' },
    { id: 3, message: 'Software Developer', image: 'computer.png' },
    { id: 4, message: 'Problem Solver', image: 'problem.png' },
    { id: 5, message: 'Maker of cool things', image: 'stuff.png' }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === messages.length - 1) {
        setIndex(INITIAL_INDEX)
      } else {
        setIndex(index + 1)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [index, messages.length])

  return (
    <div className='welcome-container container'>
      <div className='talk-bubble tri-right round right-in'>
        <div className='talktext'>
          <p>{messages[index].message}</p>
        </div>
      </div>
      {/* <div className='call-to-action'>v</div> */}
      <div className='bitmoji'>
        <img src={require(`./images/${messages[index].image}`)} alt='wave pose' />
      </div>
    </div>
  )
}

export default Welcome
