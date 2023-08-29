import React from 'react'
import classes from './LessonItem.module.css'

const LessonItem = (props) => {
  return (
    <div className={classes.lesson__container}>
        <div>
            <p className={classes.lesson__number}>{props.number}</p>
        </div>
        <div className={classes.lesson__content}>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default LessonItem
