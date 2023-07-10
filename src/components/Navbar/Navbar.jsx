import React from 'react'
import "./Navbar.css"
import logo from './logo.svg';

const Navbar = () => {
    return (
        <nav>
            <div className='left'>
                <img src={logo} alt="Logo" />
                <a href="#" className='header__mode'>Для дорослих</a>
                <a href="#" className='header__mode'>Для дітей</a>
            </div>
            <div>
                <ul>
                    <li><a href="">Про школу</a></li>
                    <li><a href="">Тарифи</a></li>
                    <li><a href="">Відгуки</a></li>
                    <li>
                        <select name="lng">
                            <option value="ua">Ua</option>
                            <option value="en">En</option>
                            <option value="ru">Ru</option>
                        </select>
                    </li>
                    <li><input type="button" value="Зв'язатися з нами" className='contact-us-btn'/></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
