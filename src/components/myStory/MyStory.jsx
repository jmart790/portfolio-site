import React, { useState } from 'react'
import './my-story.css'
import { storyData } from './storyData'

function MyStory() {
  const [index, setIndex] = useState(0)

  const handleClick = storyPoint => {
    setIndex(storyPoint)
  }

  return (
    <div className='my-story-container container'>
      <div className='my-story-label'>
        <h1>My story</h1>
      </div>

      <div className={`story-content ${storyData[index].class}`}>
        <div className={`story-img ${storyData[index].class}-img`}></div>
        <div className='story-txt'>
          <h1>{storyData[index].title}</h1>
          <p>{storyData[index].description}</p>
        </div>
      </div>

      <div className='story-buttons'>
        {storyData.map(story => {
          return (
            <button
              className={index === story.id ? 'active' : ''}
              key={story.id}
              onClick={_ => handleClick(story.id)}
            >
              {story.id + 1}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MyStory
