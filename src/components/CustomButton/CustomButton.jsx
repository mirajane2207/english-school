import React from 'react'
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
  return (
    <button className={classes.customBtn}>  
        {props.children}
    </button>
  )
}

export default CustomButton
