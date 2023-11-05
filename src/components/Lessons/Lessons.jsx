import React from 'react'
import classes from './Lessons.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import lessonsImg from './lessons-img.svg'
import lessonsMobileImg from './lessons-img-mobile.svg'
import LessonItem from '../LessonItem/LessonItem'

const Lessons = () => {
  return (
    <div className={classes.lessons___container}>
      <SectionTitle>Уроки для всіх</SectionTitle>
      <div className={classes.lessons__list_container}>
        {
          window.screen.availWidth > 520
            ? <img src={lessonsImg} alt="" />
            : <img src={lessonsMobileImg} alt="" />
        }
        <div className={classes.lessons__list}>
          <LessonItem number='01' title='Новачкам' desc='За максимально короткий час наші викладачі дадуть вам всю необхідну базу' />
          <LessonItem number='02' title='Бізнес англійська' desc='Розберемо аспекти роботи з іноземними колегами, навчимося вести переговори, писати листи та інше' />
          <LessonItem number='03' title='Розмовний інтенсив' desc='Заняття для тих хто прагне розвинути та вдосконалити навички спілкування' />
          <LessonItem number='04' title='Якщо хочеш за кордон' desc='Для людей, які хочуть вступити до навчального закладу за кордоном, взяти участь у програмі обміну досвідом в англомовній країні, тощо.' />
          <LessonItem number='05' title='Підготовка до ЗНО' desc='Розберемо всі важливі та складні моменти іспиту з англійської та максимально підготуємо підлітків для успішної здачі ЗНО' />
        </div>
      </div>
    </div>
  )
}

export default Lessons
