import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Lessons from './components/Lessons/Lessons'
import Advantages from './components/Advantages/Advantages'
import Tariffs from './components/Tariffs/Tariffs'



const App = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <About/>
        <Lessons/>
        <Advantages/>
        <Tariffs/>
    </div>
  )
}

export default App
