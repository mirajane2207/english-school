import React from 'react'
import classes from './SectionTitle.module.css'

const SectionTitle = (props) => {
  return (
    <h2 className={classes.section__title}>
      {props.children}
    </h2>
  )
}

export default SectionTitle
