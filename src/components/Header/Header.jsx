import React from 'react';
import Navbar from '../Navbar/Navbar';
import classes from "./Header.module.css";


const Header = (props) => {
    return (
        <div className={classes.header__container}>
            <Navbar mode={props.mode} changeMode={props.changeMode}/>
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
