import React from 'react'
import hand from './g8.png';
import Navbar from '../Navbar/Navbar';
import classes from "./Header.module.css"
import CustomButton from '../CustomButton/CustomButton';


const Header = () => {
    return (
        <div className={classes.header__container}>
            <Navbar />
            <div>
            <h1 className={classes.header__title}>Вчити англійську з нами легко</h1>
            <p className={classes.header__text}>Школа англійської, з якою ти точно заговориш як Native Speaker</p>
            <button>Зв'язатися з нами</button>
            </div>
            <div className={classes.header_img}>
                {/* <img src={hand} alt="" className={classes.hand_img} /> */}
            </div>
            
        </div>
    )
}

export default Header
