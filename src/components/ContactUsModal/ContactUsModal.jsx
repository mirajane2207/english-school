import React, { useState } from 'react'
import classes from './ContactUsModal.module.css'
import flagImg from './flag-icon.svg'
import insta from './../Footer/insta-ico.svg'
import fb from './../Footer/facebook-ico.svg'
import tg from './../Footer/telegram-ico.svg'
import axios from 'axios';

const ContactUsModal = ({ visible, setVisible }) => {
    const rootClasses = [classes.modal__container]
    if (visible) {
        rootClasses.push(classes.active)
    }

    function hideModal() {
        setVisible(false)
    }

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const isPhonelValid = (phone) => {
        const phonePattern = /[0-9+]/;
        return phonePattern.test(phone);
      };

    console.log(phone)

    const handleSubmit = async () => {

        if (!name || !phone) {
            alert('Not filled');
            return;
        }

        if (!isPhonelValid(phone)) {
            alert('Wrong phone number')
            return;
        }

        try {
            await axios({
                  url: 'https://api.abcrypto.io/api/feedback',
                  headers: 'Content-Type: application/json',
                  params: {
                    name,
                    phone
                  },
                  method: "POST",
                  data: null
            }).then(({ data }) => {
                alert('Delivered')
                return data;
            })
        } catch (e) {
            console.log("Sending error", e)
        }
    };

    return (
        <div className={rootClasses.join(' ')} onClick={hideModal}>
            <div className={classes.modal__content} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modal__title} >
                    <h3>Контакти</h3>
                    <button className={classes.modal__close_btn} onClick={hideModal}></button>
                </div>
                <div className={classes.modal__info}>
                    <p className={classes.modal__info_contact}>+38 097 160 14 37</p>
                    <p className={classes.modal__info_contact}>juliabodnar7@ukr.net</p>
                </div>
                <input className={classes.modal__inp} value={name} onChange={el => setName(el.target.value)} type="text" placeholder='Ім’я' pattern="[a-zA-ZЁёА-я\s]+" />
                <div className={classes.phone_input} >
                    <img src={flagImg} alt="" />
                    <input className={classes.modal__inp} value={phone} onChange={el => setPhone(el.target.value)} type="tel" placeholder='+380 хх ххх-хх-хх' pattern="[0-9\+]+" minlength="13" maxlength="13" />
                </div>
                <button className={classes.modal__contact_us_btn} onClick={handleSubmit}>Передзвоніть мені</button>
                <div className={classes.modal__info}>
                    <p className={classes.modal__info_text}> Зв’яжіться з нами зручним способом</p>
                    <div className={classes.modal__info_imgs}>
                        <a href="/#"><img src={insta} alt="" /></a>
                        <a href="/#"><img src={fb} alt="" /></a>
                        <a href="/#"><img src={tg} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUsModal