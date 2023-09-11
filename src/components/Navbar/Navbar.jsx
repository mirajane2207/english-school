import React from 'react';
import "./Navbar.css";
import logo from './logo.svg';
import ua from './ua.svg';

const Navbar = (props) => {

    function setAdult() {
        props.changeMode('adult')
    }

    function setChildren() {
        props.changeMode('children')
    }

    return (
        <nav>
            <div className='left'>
                <img src={logo} alt="Logo" className='logo'/>
                <a href="#" className={props.mode === 'adult' ? 'header__mode_active' : 'header__mode'} onClick={setAdult}>Для дорослих</a>
                <a href="#" className={props.mode === 'children' ? 'header__mode_active' : 'header__mode'}  onClick={setChildren}>Для дітей</a>
            </div>
            <div className='navbar'>
                <ul>
                    <li><a onClick={() => props.scrollTo("#about")}>Про школу</a></li>
                    <li><a onClick={() => props.scrollTo('#tariffs')}>Тарифи</a></li>
                    {
                        props.mode === 'adult'
                        ?      <li><a onClick={() => props.scrollTo('#reviews')}>Відгуки</a></li>
                        :    <li><a onClick={() => props.scrollTo('#parentsAsk')}>Батьки питають</a></li>
                    }
                    <li>
                        <img src={ua} alt="" className='uaImg'/>
                        {/* <select name="lng">
                            <option value="ua">Ua</option>
                            <option value="en">En</option>
                            <option value="ru">Ru</option>
                        </select> */}
                    </li>
                    <li><button className='contact-us-btn' onClick={props.contactUs}>Зв'язатися з нами</button></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
