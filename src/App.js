import React from 'react'

import './App.css'
import Welcome from './components/Welcome'
import MyStory from './components/MyStory'
import MyProjects from './components/MyProjects'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <div className='App'>
      <Welcome />
      <MyStory />
      <MyProjects />
      <ContactMe />
    </div>
  )
}

export default App
