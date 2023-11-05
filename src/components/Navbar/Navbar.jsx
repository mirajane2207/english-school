import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from './logo.svg';

const Navbar = (props) => {

    const [isNavbarExpanded, setIsNavbarExpanded] = useState(false)
    // const [isMobile, setIsMobile] = useState(false)

    // window.onresize = () => {
    //     if (window.screen.availWidth < 520) {
    //         setIsMobile(true)
    //     } else {
    //         setIsMobile(false)
    //     }
    // }


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
                <img src={logo} alt="Logo" className='logo' />
                <a href="/#" className={props.mode === 'adult' ? 'header__mode_active' : 'header__mode'} onClick={setAdult}>Для дорослих</a>
                <a href="/#" className={props.mode === 'children' ? 'header__mode_active' : 'header__mode'} onClick={setChildren}>Для дітей</a>
            </div>
            <div className='navbar'>
                { windowWidth > 899
                    ? < ul >
                        <li><a href="/#" onClick={() => props.scrollTo("#about")}>Про школу</a></li>
                        <li><a href="/#" onClick={() => props.scrollTo('#tariffs')}>Тарифи</a></li>
                        {
                            props.mode === 'adult'
                                ? <li><a href="/#" onClick={() => props.scrollTo('#reviews')}>Відгуки</a></li>
                                : <li><a href="/#" onClick={() => props.scrollTo('#parentsAsk')}>Батьки питають</a></li>
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
                                                <a href='/#'><img src={logo} alt="Logo" className='logo' /></a>
                                                <button className='close-btn' onClick={() => setIsNavbarExpanded(false)}></button>
                                            </div>
                                        </li>
                                        <li><a href="/#" className='navbar-item' onClick={() => scrollMobile('#about')}>Про школу</a></li>
                                        <li><a href="/#" className='navbar-item' onClick={() => scrollMobile('#tariffs')}>Тарифи</a></li>
                                        {
                                            props.mode === 'adult'
                                                ? <li><a href="/#" onClick={() => scrollMobile('/#reviews')}>Відгуки</a></li>
                                                : <li><a href="/#" onClick={() => scrollMobile('/#parentsAsk')}>Батьки питають</a></li>
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
