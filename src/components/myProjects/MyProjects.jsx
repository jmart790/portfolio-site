import React from 'react'
import './my-projects.css'

function MyProjects() {
  return (
    <div className='my-projects-container container'>
      <div className='my-projects'>
        <h1>
          My
          <br />
          Projects
        </h1>
      </div>

      <div className='project-video'>video</div>
      <div className='project-title'>title</div>
      <div className='project-description'>description</div>
      <div className='project-links'>Github | Website</div>
      <div className='carousel-tracker'>carousel tracker</div>
    </div>
  )
}

export default MyProjects
