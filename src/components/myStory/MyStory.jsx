import React, { useState, useEffect } from 'react'
import './my-story.css'

function MyStory() {
  const [selectedStory, setSelectedStory] = useState('story-one')
  const [storyData, setStoryData] = useState({})

  const handleClick = storyPoint => {
    setSelectedStory(storyPoint)
  }

  useEffect(_ => {
    const storyData = require('./myStoryData.json')
    setStoryData(storyData)
  }, [])

  return (
    <div className='my-story-container container'>
      <div className='my-story-label'>
        <h1>My story</h1>
      </div>

      <div className={`story-content ${selectedStory}`}>
        <div className={`story-img ${selectedStory}-img`}></div>
        <div className='story-txt'>
          <h1>{selectedStory}</h1>
          <p>{storyData[selectedStory]}</p>
        </div>
      </div>

      <div className='story-buttons'>
        <button onClick={_ => handleClick('story-one')}>1</button>
        <button onClick={_ => handleClick('story-two')}>2</button>
        <button onClick={_ => handleClick('story-three')}>3</button>
        <button onClick={_ => handleClick('story-four')}>4</button>
      </div>
    </div>
  )
}

export default MyStory
