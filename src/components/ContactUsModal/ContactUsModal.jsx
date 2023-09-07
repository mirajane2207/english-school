import React from 'react'
import classes from './ContactUsModal.module.css'
import flagImg from './flag-icon.svg'
import insta from './../Footer/insta-ico.svg'
import fb from './../Footer/facebook-ico.svg'
import tg from './../Footer/telegram-ico.svg'


const ContactUsModal = () => {
    return (
        <div className={[classes.modal__container, classes.active].join(' ')}>
            <div className={classes.modal__content}>
                <div className={classes.modal__title} >
                    <h3>Контакти</h3>
                    <button></button>
                </div>
                <div className={classes.modal__info}>
                    <p>+38 097 160 14 37</p>
                    <p>juliabodnar7@ukr.net</p>
                </div>
                <input type="text" placeholder='Ім’я' required/>
                <div className={classes.phone_input} >
                    <img src={flagImg} alt="" />
                    <input type="tel" placeholder='+380 хх ххх-хх-хх' maxLength={13} required/>
                </div>
                <button className={classes.modal__contact_us_btn}>Передзвоніть мені</button>
                <div className={classes.modal__info}>
                    <p className={classes.modal__info_text}> Зв’яжіться з нами зручним способом</p>
                    <div className={classes.modal__info_imgs}>
                        <a href="#"><img src={insta} alt="" /></a>
                        <a href="#"><img src={fb} alt="" /></a>
                        <a href="#"><img src={tg} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsModal
