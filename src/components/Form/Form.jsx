import React, { useEffect, useState } from 'react'
import classes from './Form.module.css'
import adultImg from './form-adult-img.svg'
import cildrenImg from './form-children-img.svg'

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
                                <input type="text" placeholder='Ваше ім’я' pattern="[a-zA-ZЁёА-я\s]+" />
                                <input type="tel" placeholder='Номер телефону' pattern="[0-9\+]+" minlength="13" maxlength="13" />
                                <input type="text" placeholder='Email' pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address" />
                            </div>
                            <div className={classes.form__btn_container}>
                                <p className={classes.form__text}>Заповніть заявку та ми зв'яжемося з вами найближчим часом</p>
                                <button className={classes.form__btn}>Відправити заявку</button>
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
