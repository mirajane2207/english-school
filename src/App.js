import { React, useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Lessons from './components/Lessons/Lessons'
import Advantages from './components/Advantages/Advantages'
import Tariffs from './components/Tariffs/Tariffs'
import Reviews from './components/Reviews/Reviews'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'



const App = () => {
  const [mode, setMode] = useState('children');

  return (
    <div className='wrapper'>
      {
        mode === 'adult'
          ? <div>
            <Header mode={mode} title='Вчити англійську з нами легко' text='Школа англійської, з якою ти точно заговориш як Native Speaker'/>
            <About />
            <Lessons />
            <Advantages />
            <Tariffs />
            <Reviews />
            <Form />
            <Footer />
          </div>
          : <div>
            <Header mode={mode} title='Школа англійської для дітей' text='Подбайте про майбутнє Вашої дитини вже зараз! Придбайте абонемент нашої онлайн-школи та відкрийте широкий спектр можливостей для Ваших дітлахів.'/>
            <About />
            <Lessons />
            <Advantages />
            <Tariffs />
            <Reviews />
            <Form />
            <Footer />
          </div>
      }

    </div>
  )
}

export default App
