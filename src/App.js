import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Lessons from './components/Lessons/Lessons'



const App = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <About/>
        <Lessons/>
    </div>
  )
}

export default App
