import React from 'react'
import classes from './Tariffs.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import TariffItem from '../TariffItem/TariffItem'

const Tariffs = () => {
    return (
        <div className={classes.tariffs__container}>
            <SectionTitle>Наші тарифи
                <p>/\1...4/\</p>
            </SectionTitle>
            <div className={classes.tariffs__items_container}>
                <TariffItem title='Індивідуальний' qty='8 занять' price='2000 грн' desc='Заняття 2 рази на тиждень індивідуально з викладачем за авторською програмою' />
                <TariffItem title='Груповий' qty='8 занять' price='1500 грн' desc='Заняття в групах до 5 людей, 2 рази на тиждень за авторською програмою' />
                <TariffItem title='Разовий' qty='1 заняття' price='280 грн' desc='Проходить індивідуально, для тих хто прагне розібрати та вдосконалити конкретні теми' />
                <TariffItem title='Інтенсивний' qty='12 занять' price='2800 грн' desc='3 заняття на тиждень + участь в двух розмовних клубах на вибір' />
            </div>
        </div>
    )
}

export default Tariffs
