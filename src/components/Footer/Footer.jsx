import React from 'react'
import classes from './Footer.module.css'
import logo from './../Navbar/logo.svg'

const Footer = () => {
  return (
    <footer>
      <div className={classes.footer__content_container}>
        <img src={logo} alt="" />
        <div className={classes.footer__item_container}>
            <h6>Меню</h6>
            <a href="">Головна</a>
            <a href="">Про школу</a>
            <a href="">Тарифи</a>
            <a href="">Відгуки</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
