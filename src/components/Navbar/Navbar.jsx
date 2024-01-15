import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from './logo.svg';

const Navbar = (props) => {

    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false)
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

    function setAdult() {
        props.changeMode('adult')
    }

    function setChildren() {
        props.changeMode('children')
    }

    function scrollMobile(section) {
        props.scrollTo(section);
        setIsNavbarExpanded(false);
    }

    return (
        <nav className='menu'>
            <div className='left'>
                <a href="/"><img src={logo} alt="Logo" className='logo' /></a>
                <p className={props.mode === 'adult' ? 'header__mode_active' : 'header__mode'} onClick={setAdult}>Для дорослих</p>
                <p className={props.mode === 'children' ? 'header__mode_active' : 'header__mode'} onClick={setChildren}>Для дітей</p>
            </div>
            <div className='navbar'>
                {windowWidth > 820
                    ? < ul >
                        <li onClick={() => props.scrollTo("#about")}>Про школу</li>
                        <li onClick={() => props.scrollTo('#tariffs')}>Тарифи</li>
                        {
                            props.mode === 'adult'
                                ? <li onClick={() => props.scrollTo('#reviews')}>Відгуки</li>
                                : <li onClick={() => props.scrollTo('#parentsAsk')}>Батьки питають</li>
                        }
                        <li><button className='contact-us-btn' onClick={props.contactUs}>Зв'язатися з нами</button></li>
                    </ul>
                    : <div className='humburger_container'>
                        {
                            isNavbarExpanded
                                ? <div className='navbar-mobile expanded'>
                                    < ul >
                                        <li>
                                            <div className='navbar-head'>
                                                <a href='/'><img src={logo} alt="Logo" className='logo' /></a>
                                                <button className='close-btn' onClick={() => setIsNavbarExpanded(false)}></button>
                                            </div>
                                        </li>
                                        <li><a href="/" className='navbar-item' onClick={() => scrollMobile('#about')}>Про школу</a></li>
                                        <li><a href="/" className='navbar-item' onClick={() => scrollMobile('#tariffs')}>Тарифи</a></li>
                                        {
                                            props.mode === 'adult'
                                                ? <li><a href="/" onClick={() => scrollMobile('#reviews')}>Відгуки</a></li>
                                                : <li><a href="/" onClick={() => scrollMobile('#parentsAsk')}>Батьки питають</a></li>
                                        }
                                        <li><button className='navbar-item-btn' onClick={props.contactUs}>Зв'язатися з нами</button></li>
                                    </ul>
                                </div>
                                :
                                <div className='navbar-mobile'></div>
                        }
                        <button className='humburger' onClick={() => setIsNavbarExpanded(true)}></button>
                    </div>
                }
            </div>
        </nav >
    )
}

export default Navbar
