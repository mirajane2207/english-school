import React, { useState } from 'react'
import "./Navbar.css"
import logo from './logo.svg';
import ua from './ua.svg';

const Navbar = (props) => {

    const [mode, setMode] = useState('children')
    function setAdult() {
        setMode('adult')
    }

    function setChildren() {
        setMode('children')
    }

    return (
        <nav>
            <div className='left'>
                <img src={logo} alt="Logo" className='logo'/>
                <a href="#" className={mode === 'adult' ? 'header__mode_active' : 'header__mode'} onClick={setAdult}>Для дорослих</a>
                <a href="#" className={mode === 'children' ? 'header__mode_active' : 'header__mode'}  onClick={setChildren}>Для дітей</a>
            </div>
            <div className='navbar'>
                <ul>
                    <li><a href="">Про школу</a></li>
                    <li><a href="">Тарифи</a></li>
                    {
                        mode === 'adult'
                        ?      <li><a href="">Відгуки</a></li>
                        :    <li><a href="">Батьки питають</a></li>
                    }
                    <li>
                        <img src={ua} alt="" className='uaImg'/>
                        {/* <select name="lng">
                            <option value="ua">Ua</option>
                            <option value="en">En</option>
                            <option value="ru">Ru</option>
                        </select> */}
                    </li>
                    <li><button className='contact-us-btn'>Зв'язатися з нами</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
