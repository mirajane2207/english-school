import React from 'react'
import classes from './Lessons.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import lessonsImg from './lessons-img.png'
import LessonListItem from '../LessonListItem/LessonListItem'

const Lessons = () => {
  return (
    <div className={classes.lessons___container}>
        <SectionTitle>Уроки для всіх</SectionTitle>
        <div className={classes.lessons__list_container}>
            <img src={lessonsImg} alt="" />
            <div className={classes.lessons__list}>
                <LessonListItem number='01' title='Новачкам' desc='За максимально короткий час наші викладачі дадуть вам всю необхідну базу'/>
                <LessonListItem number='02' title='Бізнес англійська' desc='Розберемо аспекти роботи з іноземними колегами, навчимося вести переговори, писати листи та інше'/>
                <LessonListItem number='03' title='Розмовний інтенсив' desc='Заняття для тих хто прагне розвинути та вдосконалити навички спілкування'/>
                <LessonListItem number='04' title='Якщо хочеш за кордон' desc='Для людей, які хочуть вступити до навчального закладу за кордоном, взяти участь у програмі обміну досвідом в англомовній країні, тощо.'/>
                <LessonListItem number='05' title='Підготовка до ЗНО' desc='Розберемо всі важливі та складні моменти іспиту з англійської та максимально підготуємо підлітків для успішної здачі ЗНО'/>
            </div>
        </div>
    </div>
  )
}

export default Lessons
