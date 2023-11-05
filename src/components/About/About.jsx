import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import classes from './About.module.css'

const About = (props) => {
    return (
        <div className={classes.about__container} id='about'>
            <div className={classes.about__text}>
                <SectionTitle>Про школу</SectionTitle>
                <div className={classes.about__info}>
                    <h3 className={props.mode === 'adult' ? classes.about__h3_adult : classes.about__h3_children}>{props.title}</h3>
                    <p className={props.mode === 'adult' ? classes.about__p_adult : classes.about__p_children}>{props.text}</p>
                </div>
            </div>
            
            { props.mode === 'children'
                ? <div className={classes.about__children_rect}></div>
                : <div className={props.mode === 'adult' ? classes.about__adult_img : classes.about__children_img}>
                
                </div>
            }
        </div>
    )
}

export default About
