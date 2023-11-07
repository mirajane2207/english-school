import React from 'react'
import classes from './About2.module.css'

const About = (props) => {
    return (
        <div className={classes.section__container} id='about'>
            <h2 className={classes.section__title}>Про школу</h2>
            <div className={classes.about__text_container}>
                <h3 className={classes.about__title}>{props.title}</h3>
                <p className={classes.about__text}>{props.text}</p>
            </div>
            <div className={props.mode === 'adult' ? classes.about__adult_img : classes.about__children_img}></div>


            {/* <div className={classes.about__text}>
                <div className={classes.about__info}>
                    <div className={classes.about__head_container}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
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

            

            {props.mode === 'children'
                ? <div className={classes.about__children_rect}>
                    <div className={classes.about__children_img}></div>
                </div>
                : <div className={classes.about__adult_img}></div>

            } */}
        </div>
    )
}

export default About
