import React from 'react'
import hand from './g8.png';
import Navbar from '../Navbar/Navbar';
import classes from "./Header.module.css"
import CustomButton from '../CustomButton/CustomButton';


const Header = (props) => {
    return (
        <div className={classes.header__container}>
            <Navbar mode={props.mode} />
            <div>
                <h1 className={classes.header__title}>{props.title}</h1>
                <p className={classes.header__text}>{props.text}</p>
                <button>Зв'язатися з нами</button>
            </div>
            <div className={props.mode === 'adult' ? classes.header_img_adult : classes.header_img_children}></div>
        </div>
    )
}

export default Header
