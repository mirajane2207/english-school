import React from 'react'
import classes from './Reviews.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import personImg from './reviews-person.svg'
import ReviewItem from '../ReviewItem/ReviewItem'

const Reviews = () => {
    return (
        <div className={classes.reviews__container}>
            <div>
                <SectionTitle>Відгуки про нас</SectionTitle>
                <img src={personImg} alt="" />
            </div>
            <div className={classes.reviews__items_container}>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
            </div>
        </div>
    )
}

export default Reviews
