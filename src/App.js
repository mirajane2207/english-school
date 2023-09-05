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
  const [mode, setMode] = useState('adult');

  return (
    <div className='wrapper'>
      {
        mode === 'adult'
          ? <div>
            <Header mode={mode} title='Вчити англійську з нами легко' text='Школа англійської, з якою ти точно заговориш як Native Speaker'/>
            <About mode={mode} title='Ми молода але вже успішна школа англійської' text='Школа англійської мови Pengli - це команда молодих, креативних викладачів, які постійно розвиваються, вдосконалюються, а також всім серцем люблять англійську мову і знають як зробити так аби ви без жодних страждань та дискомфорту заговорили англійською незгірше Бориса Джонсона. За нашими плечами 5 років досвіду викладання, а також великий багаж цінних знань, якими ми радо ділимось з нашими студентами.'/>
            <Lessons />
            <Advantages />
            <Tariffs />
            <Reviews />
            <Form />
            <Footer />
          </div>
          : <div>
            <Header mode={mode} title='Школа англійської для дітей' text='Подбайте про майбутнє Вашої дитини вже зараз! Придбайте абонемент нашої онлайн-школи та відкрийте широкий спектр можливостей для Ваших дітлахів.'/>
            <About mode={mode} title='Чим цікава та унікальна школа англійської для дітей Pengli?' text='В онлайн-школі Pengli Ваша дитина зможе не тільки покращити рівень англійської та здобути необхідні навички для успішного навчання у школі, але й по-справжньому полюбити вивчення іноземної мови та з нетерпінням чекати на кожне заняття. Інтерактивні завдання, вікторини, ігри, перегляд та обговорення улюблених мультиків - все це перетворить навчання в цікавий та захопливий процес, а наші досвідчені викладачі максимально наповнять кожне заняття важливим та корисним матеріалом.'/>
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
