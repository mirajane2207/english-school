import React from 'react'
import classes from './Footer.module.css'
import logo from './../Navbar/logo.svg'
import facebook from './facebook-ico.svg'

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
            <img src={facebook} alt="" />
            <a href="">Facebook</a>
            <a href="">Instagram</a>
        </div>
        <div className={classes.footer__item_container}>
            <h6 className={classes.footer__header}>Контакти</h6>
            <a href="">juliabodnar7@ukr.net</a>
            <a href="">+38 097 160 14 37</a>
            <a href="">@Juliia_bodnar</a>
            <a href="">+38 097 160 14 37</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
