import { React, useEffect, useState } from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Lessons from './components/Lessons/Lessons'
import Advantages from './components/Advantages/Advantages'
import Tariffs from './components/Tariffs/Tariffs'
import Reviews from './components/Reviews/Reviews'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
import ForChildren from './components/ForChildren/ForChildren'
import ParentsAsk from './components/ParentsAsk/ParentsAsk'
import ScrollToTopButt from './components/ScrollToTopButt/ScrollToTopButt'

const App = () => {
  const [mode, setMode] = useState('adult'); 

  function changeMode(mode) {
    setMode(mode)
  }

  const scrollTo = (section) => {
    document.querySelector(section).scrollIntoView({ behavior: "smooth" });
  };


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='wrapper1'>
      {
        mode === 'adult'
          ? <div className='inner_wrapper'>
            <Header scrollTo={scrollTo} changeMode={changeMode} mode={mode} title='Вчити англійську з нами легко' text='Школа англійської, з якою ти точно заговориш як Native Speaker' />
            <About mode={mode} title='Молода, однак вже успішна школа англійської мови' text='Школа англійської мови Pengli - це команда молодих, креативних викладачів, які постійно розвиваються, вдосконалюються, а також всім серцем люблять англійську мову і знають як зробити так аби ви без жодних страждань та дискомфорту заговорили англійською незгірше Бориса Джонсона. За нашими плечами 5 років досвіду викладання, а також великий багаж цінних знань, якими ми радо ділимось з нашими студентами.' />
            <Lessons />
            <Advantages />
            <Tariffs />
            <Reviews scrollTo={scrollTo}/>
            <Form mode={mode} />
            <Footer mode={mode} changeMode={changeMode} scrollTo={scrollTo} />
            <ScrollToTopButt/>
          </div>
          : <div className='inner_wrapper'>
            {
              windowWidth > 820
                ? <Header scrollTo={scrollTo} changeMode={changeMode} mode={mode} title='Школа англійської для дітей' text='Подбайте про майбутнє Вашої дитини вже зараз! Придбайте абонемент нашої онлайн-школи та відкрийте широкий спектр можливостей для Ваших дітлахів.' />
                : <Header scrollTo={scrollTo} changeMode={changeMode} mode={mode} title='Школа англійської для дітей' text='Подбайте про майбутнє Вашої дитини вже зараз!' />

            }
            <About mode={mode} title='Чим цікава та унікальна школа англійської для дітей Pengli?' text='В онлайн-школі Pengli Ваша дитина зможе не тільки покращити рівень англійської та здобути необхідні навички для успішного навчання у школі, але й по-справжньому полюбити вивчення іноземної мови та з нетерпінням чекати на кожне заняття. Інтерактивні завдання, вікторини, ігри, перегляд та обговорення улюблених мультиків - все це перетворить навчання в цікавий та захопливий процес, а наші досвідчені викладачі максимально наповнять кожне заняття важливим та корисним матеріалом.' />
            <ForChildren />
            <Tariffs />
            <ParentsAsk />
            <Form mode={mode} />
            <Footer scrollTo={scrollTo} mode={mode} changeMode={changeMode} />
            <ScrollToTopButt/>
          </div>
      }

    </div>
  )
}

export default App
