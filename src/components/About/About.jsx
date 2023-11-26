import { React, useEffect, useState } from 'react'
import classes from './About.module.css'

const About = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div id='about' className={classes.wrapper}>
            {windowWidth < 820
                ? <div className={classes.section__container}>
                    <h2 className={classes.section__title}>Про школу</h2>
                    <h3 className={classes.about__title}>{props.title}</h3>
                    <p className={props.mode === 'adult' ? classes.about__text_adult : classes.about__text_children}>{props.text}</p>
                    <div className={props.mode === 'adult' ? classes.about__adult_img : classes.about__children_img}></div>
                </div>
                : <div className={classes.section__container}>
                    <h2 className={classes.section__title}>Про школу</h2>
                    <div className={classes.about__text_container}>
                        <h3 className={classes.about__title}>{props.title}</h3>
                        <p className={classes.about__text}>{props.text}</p>
                    </div>
                    <div className={props.mode === 'adult' ? classes.about__adult_img : classes.about__children_img}></div>
                </div>
            }
            <span className={props.mode === 'children' ? classes.about__rect : ''}></span>
        </div>
    )
}

export default About
