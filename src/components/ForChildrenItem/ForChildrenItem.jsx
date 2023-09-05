import React from 'react'
import classes from './ForChildrenItem.module.css'

const ForChildrenItem = (props) => {
  return (
    <div className={classes.item__container}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default ForChildrenItem
