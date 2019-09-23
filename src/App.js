import React from 'react'
import './App.css'
import Welcome from './components/welcome/Welcome'
import MyStory from './components/myStory/MyStory'
import MyProjects from './components/myProjects/MyProjects'
import ContactMe from './components/contactMe/ContactMe'

function App() {
  return (
    <div className='site'>
      <Welcome />
      <MyStory />
      <MyProjects />
      <ContactMe />
    </div>
  )
}

export default App
