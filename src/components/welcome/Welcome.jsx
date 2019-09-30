import React, { useState, useEffect } from 'react'
import './welcome.css'

function Welcome() {
  const INITIAL_INDEX = 0
  const [index, setIndex] = useState(INITIAL_INDEX)
  const messages = [
    { id: 0, message: 'Hi there!', image: 'wave-pose.png' },
    { id: 1, message: "I'm Josh", image: 'wave-pose.png' },
    { id: 2, message: 'I would describe myself as a...', image: 'balance-pose.png' },
    { id: 3, message: 'Software Developer', image: 'surf-pose.png' },
    { id: 4, message: 'Problem Solver', image: 'moon-pose.png' },
    { id: 5, message: 'Maker of cool things', image: 'dragon-pose.png' }
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
      <div class='talk-bubble tri-right round right-in'>
        <div class='talktext'>
          <p>{messages[index].message}</p>
        </div>
      </div>
      {/* <div className='call-to-action'>v</div> */}
      <div className='bitmoji'>
        <img src={require(`./${messages[index].image}`)} alt='wave pose' />
      </div>
    </div>
  )
}

export default Welcome
