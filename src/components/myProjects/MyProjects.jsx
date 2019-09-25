import React, { useState, useEffect } from 'react'
import './my-projects.css'
import { projectData } from './projectData'

const MyProjects = () => {
  const INITIAL_INDEX = 0
  const [index, setIndex] = useState(INITIAL_INDEX)
  const INITIAL_PLAYING = true
  const [isPlaying, setIsplaying] = useState(INITIAL_PLAYING)

  useEffect(() => {
    while (isPlaying) {
      const interval = setInterval(() => {
        if (index === projectData.length - 1) {
          setIndex(INITIAL_INDEX)
        } else {
          setIndex(index + 1)
        }
      }, 3500)
      return () => clearInterval(interval)
    }
  }, [index, isPlaying])

  const handleClick = id => setIndex(id)
  const handlePlay = _ => setIsplaying(!isPlaying)
  const showIndex = currentIndex => (index === currentIndex ? 'current-index' : '')

  return (
    <div className='my-projects-container container'>
      <div className='my-projects'>
        <h1>
          My
          <br />
          Projects
        </h1>
      </div>

      <div className='carousel-projects'>
        <div className='project-title'>{projectData[index].title}</div>
        <img src={projectData[index].image} className='project-image' alt='project' />
        <div className='projects-indicator'>
          {projectData.map(project => {
            return (
              <button
                key={project.id}
                className={showIndex(project.id)}
                onClick={_ => handleClick(project.id)}
              >
                {project.id}
              </button>
            )
          })}
          <button className='pause-btn' onClick={handlePlay}>
            {isPlaying ? '||' : '>'}
          </button>
        </div>
        <div className='project-description'>{projectData[index].description}</div>
        <div className='project-links'>{projectData[index].github}</div>
      </div>
    </div>
  )
}

export default MyProjects
