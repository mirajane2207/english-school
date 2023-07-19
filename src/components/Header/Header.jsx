import React from 'react'
import hand from './g8.png';
import Navbar from '../Navbar/Navbar';
import "./Header.css"
import CustomButton from '../CustomButton/CustomButton';

const Header = () => {
    return (
        <div className='wrapper'>
            <Navbar />
            <div>
            <h1 className='header__title'>Вчити англійську з нами легко</h1>
            <p className='header__text'>Школа англійської, з якою ти точно заговориш як Native Speaker</p>
            <CustomButton>Зв'язатися з нами</CustomButton>
            </div>
            <div className='header_img'>
                <img src={hand} alt="" className='hand_img' />
            </div>
            
        </div>
    )
}

export default Header
