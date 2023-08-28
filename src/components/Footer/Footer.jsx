import React from 'react'
import classes from './Footer.module.css'
import logo from './../Navbar/logo.svg'
import facebook from './facebook-ico.svg'
import instagram from './insta-ico.svg'
import telegram from './telegram-ico.svg'
import phone from './phone-ico.svg'
import msg from './msg-ico.svg'
import whatsup from './whatsup-ico.svg'

const Footer = () => {
    return (
        <footer>
            <div className={classes.footer__content_container}>
                <img src={logo} alt="" />
                <div className={classes.footer__item_container}>
                    <h6 className={classes.footer__header}>Меню</h6>
                    <a href="">Головна</a>
                    <a href="">Про школу</a>
                    <a href="">Тарифи</a>
                    <a href="">Відгуки</a>
                </div>
                <div className={classes.footer__item_container}>
                    <h6 className={classes.footer__header}>Навігація</h6>
                    <a href="">Для дорослих</a>
                    <a href="">Для дітей</a>
                </div>
                <div className={classes.footer__item_container}>
                    <h6 className={classes.footer__header}>Стежити</h6>
                    <ul>
                        <li> <img src={facebook} alt="" />
                            <a href="">Facebook</a></li>
                        <li>
                            <img src={instagram} alt="" />
                            <a href="">Instagram</a>
                        </li>
                    </ul>

                </div>
                <div className={classes.footer__item_container}>
                    <h6 className={classes.footer__header}>Контакти</h6>
                    <ul>
                        <li> <img src={msg} alt="" />
                            <a href="">juliabodnar7@ukr.net</a>
                        </li>
                        <li>
                            <img src={phone} alt="" />
                            <a href="">+38 097 160 14 37</a>
                        </li>
                        <li>
                            <img src={telegram} alt="" />
                            <a href="">@Juliia_bodnar</a>
                        </li>
                        <li>
                            <img src={whatsup} alt="" />
                            <a href="">+38 097 160 14 37</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
