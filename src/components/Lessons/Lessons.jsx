import React, { useEffect, useRef, useState } from 'react'
import classes from './Lessons.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import lessonsImg from './lessons-img.svg'
import lessonsMobileImg from './lessons-img-mobile.svg'
import LessonItem from '../LessonItem/LessonItem'

const Lessons = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);

  const [isRight, setisRight] = useState(false)
  const [isLeft, setIsLeft] = useState(true)


  function handleScroll() {
    if (targetRef.current) {
      const target = targetRef.current;
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + window.innerHeight;
      const targetTop = target.offsetTop;
      const targetBottom = targetTop + target.clientHeight;

      if (targetTop >= viewportTop && targetBottom <= viewportBottom) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'auto';
      }
    }
  }

  function onScroll() {
    const newScrollLeft = targetRef.current.scrollLeft
    const width = targetRef.current.clientWidth
    const scrollWidth = targetRef.current.scrollWidth

    console.log("sw " + scrollWidth)
    console.log("nsw" + newScrollLeft)
    console.log(scrollWidth - (newScrollLeft + 0.5) )

    if (scrollWidth - (newScrollLeft + 0.5) === 1000) {
      setisRight(true);
      document.body.style.overflowY = 'auto';
    } else {
      setisRight(false);
      document.body.style.overflowY = 'hidden';
    }

    if (targetRef.current.scrollLeft === 0) {
      document.body.style.overflowY = 'auto';
      setIsLeft(true);
    } 

    console.log(targetRef.current.scrollTop)
    console.log(isRight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollRef = useRef();

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const wheelListener = (e) => {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 5,
        });
      };
      el.addEventListener("wheel", wheelListener);
      return () => el.removeEventListener("wheel", wheelListener);
    }
  }, []);

  return (
    <div className={classes.lessons___container}>
      <SectionTitle>Уроки для всіх</SectionTitle>
      <div className={classes.lessons__list_container} ref={scrollRef}>
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
