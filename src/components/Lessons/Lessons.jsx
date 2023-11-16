import {React, useState, useEffect} from 'react'
import classes from './Lessons.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import lessonsImg from './lessons-img.svg'
import LessonItem from '../LessonItem/LessonItem'
import lessonsBtn from './lessons-btn.svg'

const Lessons = () => {


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
    <div className={classes.lessons___container}>
      {
        windowWidth > 789
          ? <SectionTitle>Уроки для всіх</SectionTitle>
          : <div className={classes.section__title_container}>
            <SectionTitle>Уроки для всіх</SectionTitle>
            <img src={lessonsBtn} alt=''/>
          </div>
      }
      <div className={classes.lessons__list_container}>
        {
          windowWidth > 899
            ? <img src={lessonsImg} alt="" />
            : <span></span>
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
