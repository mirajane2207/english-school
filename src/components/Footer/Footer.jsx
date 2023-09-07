import React from 'react'
import classes from './Footer.module.css'
import logo from './../Navbar/logo.svg'
import facebook from './facebook-ico.svg'
import instagram from './insta-ico.svg'
import telegram from './telegram-ico.svg'
import phone from './phone-ico.svg'
import msg from './msg-ico.svg'
import whatsup from './whatsup-ico.svg'

const Footer = ({mode, changeMode}) => {
    function setAdult() {
        changeMode('adult')
        console.log('switched')
    }

    function setChildren() {
        changeMode('children')
    }

    return (
        <footer>
            <div className={classes.footer__content_container}>
                <img src={logo} alt="" />
                <div className={classes.footer__item_container}>
                    <h6 className={classes.footer__header}>Меню</h6>
                    <a href="">Головна</a>
                    <a href="">Про школу</a>
                    <a href="">Тарифи</a>
                    {
                        mode === 'adult'
                        ?  <a href="">Відгуки</a>
                        :  <a href="">Батьки питають</a>
                    }
                   
                </div>
                <div className={classes.footer__item_container}>
                    <h6 className={classes.footer__header}>Навігація</h6>
                    <a href="#" onClick={setAdult}>Для дорослих</a>
                    <a href="#" onClick={setChildren}>Для дітей</a>
                </div>
                <div className={classes.footer__item_container}>
                    <h6 className={classes.footer__header}>Стежити</h6>
                        <a href=""><img src={facebook} alt="" />Facebook</a>
                        <a href=""><img src={instagram} alt="" />Instagram</a>
                </div>
                <div className={classes.footer__item_container}>
                    <h6 className={classes.footer__header}>Контакти</h6>
                    <a href="mailto:juliabodnar7@ukr.net"><img src={msg} alt="" />juliabodnar7@ukr.net</a>
                    <a href="tel:+380971601437"><img src={phone} alt="" />+38 097 160 14 37</a>
                    <a href="https://t.me/OksanaChernenko2207"><img src={telegram} alt="" />@Juliia_bodnar</a>
                    <a href=""><img src={whatsup} alt="" />+38 097 160 14 37</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
