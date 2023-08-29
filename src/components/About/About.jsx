import React from 'react'
import classes from './About.module.css'
import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import hand from './about-hand-img.svg'

const About = () => {
    return (
        <div className={classes.about__container}>
            <div className={classes.about__text}>
                <SectionTitle>Про школу</SectionTitle>
                <div className={classes.about__info}>
                    <h3>Ми молода але вже успішна школа англійської</h3>
                    <p>Школа англійської мови Pengli - це команда молодих, креативних викладачів, які постійно розвиваються, вдосконалюються, а також всім серцем люблять англійську мову і знають як зробити так аби ви без жодних страждань та дискомфорту заговорили англійською незгірше Бориса Джонсона. За нашими плечами 5 років досвіду викладання, а також великий багаж цінних знань, якими ми радо ділимось з нашими студентами.</p>
                </div>
            </div>
            <img src={hand} alt="" className={classes.about__img} />
        </div>
    )
}

export default About
