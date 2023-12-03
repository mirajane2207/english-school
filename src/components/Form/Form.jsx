import React, { useEffect, useState } from 'react'
import classes from './Form.module.css'
import adultImg from './form-adult-img.svg'
import cildrenImg from './form-children-img.svg'
import axios from 'axios';

const Form = (props) => {

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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [short_description, setText] = useState('');
  
    const isEmailValid = (email) => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    };

    const isPhonelValid = (email) => {
        const emailPattern = /[0-9\+]+/;
        return emailPattern.test(email);
      };
    
  
    console.log(short_description)

    const handleSubmit = async () => {
  
      if(!name || !email || !short_description) {
        alert('Not filled');
        return;
      }
  
      if (!isEmailValid(email)) {
        alert('Wrong email')
        return;
      }
  
      try {
        await axios({
          url: 'https://api.abcrypto.io/api/feedback',
          headers: 'Content-Type: application/json',
          params: {
            name,
            email,
            short_description
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
        <div className={classes.form__wrapper}>
            {
                props.mode === 'adult'
                    ? <div className={classes.form__adult_title}>
                        <img src={adultImg} alt="" />
                        <h1 className={classes.form__title}>Втілюємо <br />мрії багатьох</h1>
                    </div>
                    : <div className={classes.form__children_title}>
                        <img src={cildrenImg} alt="" />
                        <h1 className={classes.form__title}>Keep calm and learn English</h1>
                    </div>
            }
            <form action="">
                {
                    windowWidth > 820
                        ? <div className={classes.form__container}>
                            <div className={classes.form__input_container}>
                                <input value={name} onChange={el => setName(el.target.value)} type="text" placeholder='Ваше ім’я' pattern="[a-zA-ZЁёА-я\s]+" />
                                <input value={short_description} onChange={el => setText(el.target.value)} type="tel" placeholder='Номер телефону' pattern="[0-9\+]+" minlength="13" maxlength="13" />
                                <input value={email} onChange={el => setEmail(el.target.value)} type="text" placeholder='Email' pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address" />
                            </div>
                            <div className={classes.form__btn_container}>
                                <p className={classes.form__text}>Заповніть заявку та ми зв'яжемося з вами найближчим часом</p>
                                <button onClick={handleSubmit} className={classes.form__btn}>Відправити заявку</button>
                            </div>
                        </div>
                        : <div className={classes.form__container}>
                            <p className={classes.form__text}>Заповніть заявку та ми зв'яжемося з вами найближчим часом</p>
                            <div className={classes.form__input_container}>
                                <input type="text" placeholder='Ваше ім’я' pattern="[a-zA-ZЁёА-я\s]+" />
                                <input type="number" placeholder='Номер телефону' pattern="[0-9\+]+" />
                                <input type="text" placeholder='Email' pattern="[^@\s]+@[^@\s]+\.[^@\s]+" />
                            </div>
                            <div className={classes.form__btn_container}>
                                <button className={classes.form__btn}>Відправити заявку</button>
                            </div>
                        </div>
                }

            </form>
        </div>
    )
}

export default Form
