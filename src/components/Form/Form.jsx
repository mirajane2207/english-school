import React from 'react'
import classes from './Form.module.css'
import handImg from './form-img.png'
import CustomButton from '../CustomButton/CustomButton'

const Form = () => {
    return (
        <div>
            <div className={classes.form__title_container}>
                <img src={handImg} alt="" />
                <h1 className={classes.form__title}>Втілюємо мрії багатьох</h1>
            </div>
            <form action="">
                <div className={classes.form__container}>
                    <div className={classes.form__input_container}>
                        <input type="text" placeholder='Ваше ім’я' />
                        <input type="text" placeholder='Номер телефону' />
                        <input type="text" placeholder='Email' />
                    </div>
                    <div>
                        <p>Заповніть заявку та ми зв'яжемося з вами найближчим часом</p>
                        <CustomButton>Відправити заявку</CustomButton>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form
