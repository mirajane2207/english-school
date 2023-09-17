import React from 'react'
import classes from './Form.module.css'
import adultImg from './form-adult-img.svg'
import cildrenImg from './form-children-img.svg'

const Form = (props) => {
    return (
        <div className={classes.form__wrapper}>
            {
                props.mode === 'adult'
                    ? <div className={classes.form__adult_title}>
                        <img src={adultImg} alt="" />
                        <h1 className={classes.form__title}>Втілюємо мрії багатьох</h1>
                    </div>
                    : <div className={classes.form__children_title}>
                        <img src={cildrenImg} alt="" />
                        <h1 className={classes.form__title}>Keep calm and learn English</h1>
                    </div>
            }
            <form action="">
                {
                    window.screen.availWidth > 520
                        ? <div className={classes.form__container}>
                            <div className={classes.form__input_container}>
                                <input type="text" placeholder='Ваше ім’я' />
                                <input type="tel" placeholder='Номер телефону' />
                                <input type="text" placeholder='Email' />
                            </div>
                            <div className={classes.form__btn_container}>
                                <p className={classes.form__text}>Заповніть заявку та ми зв'яжемося з вами найближчим часом</p>
                                <button>Відправити заявку</button>
                            </div>
                        </div>
                        : <div className={classes.form__container}>
                            <p className={classes.form__text}>Заповніть заявку та ми зв'яжемося з вами найближчим часом</p>
                            <div className={classes.form__input_container}>
                                <input type="text" placeholder='Ваше ім’я' />
                                <input type="number" placeholder='Номер телефону' />
                                <input type="text" placeholder='Email' />
                            </div>
                            <div className={classes.form__btn_container}>
                                <button>Відправити заявку</button>
                            </div>
                        </div>
                }

            </form>
        </div>
    )
}

export default Form
