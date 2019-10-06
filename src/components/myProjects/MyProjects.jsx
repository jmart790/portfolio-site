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
  const showIndex = currentIndex =>
    index === currentIndex ? 'selected-project' : 'unselected-project'

  return (
    <div className='my-projects-container container'>
      <div className='my-projects-label'>
        <h1>
          My
          <br />
          Projects
        </h1>
      </div>

      <div className='project-title'>
        <h1>{projectData[index].title}</h1>
      </div>
      <div className='carousel-projects'>
        {/* <div className='project-image-container'> */}
        <div className={`project-image ${projectData[index].title}`} />
        {/* </div> */}

        <div className='projects-indicator'>
          {projectData.map(project => {
            return (
              <button
                key={project.id}
                className={`ind-btn ${showIndex(project.id)}`}
                onClick={_ => handleClick(project.id)}
              >
                <i className={project.icon}></i>
              </button>
            )
          })}
          <button className='pause-btn' onClick={handlePlay}>
            {isPlaying ? <i className='fas fa-pause'></i> : <i className='fas fa-play'></i>}
          </button>
        </div>

        <div className='divider'></div>

        <div className='project-description'>
          <h2>Description</h2>
          <p>{projectData[index].description}</p>
        </div>

        <div className='project-links'>
          <a href={projectData[index].site} target='_blank' rel='noopener noreferrer'>
            Live Site
          </a>
          <span> | </span>
          <a href={projectData[index].github} target='_blank' rel='noopener noreferrer'>
            Source Code
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyProjects
