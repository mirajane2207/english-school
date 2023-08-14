import React from 'react'
import classes from './ReviewItem.module.css'
import stars from './stars.png'

const ReviewItem = (props) => {
    return (
        <div className={classes.review__container}>
            <div className={classes.review__name}>
                <h4>{props.name}</h4>
                <img src={stars} alt="" />
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default ReviewItem
