import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import classes from './About.module.css'
import adultMobImg from './about-adult-mobile-img.svg'
import childrenMobImg from './about-children-mobile-img.svg'

const About = (props) => {
    return (
        <div className={classes.about__container} id='about'>
            <div className={classes.about__text}>
                <div className={classes.about__info}>
                    <div className={classes.about__head_container}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px'}}>
                            <SectionTitle>Про школу</SectionTitle>
                            <h3 className={props.mode === 'adult' ? classes.about__h3_adult : classes.about__h3_children}>{props.title}</h3>

                        </div>
                        {
                            props.mode === 'children'
                                ? <img src={childrenMobImg} alt="" />
                                : <div></div>
                        }
                    </div>
                    <div className={classes.about__text_container}>
                        <p className={props.mode === 'adult' ? classes.about__p_adult : classes.about__p_children}>{props.text}</p>
                        {
                            props.mode === 'adult'
                                ? <img src={adultMobImg} alt="" />
                                : <div></div>
                        }
                    </div>
                </div>
            </div>
            <div className={props.mode === 'adult' ? classes.about__adult_img : classes.about__children_img}>

                </div>

            {props.mode === 'children'
                ? <div className={classes.about__children_rect}></div>
                : <div style={{position: 'absolute'}}></div>
            }
        </div>
    )
}

export default About
