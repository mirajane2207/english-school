import { React, useState, useRef } from 'react'
import classes from './Tariffs.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import TariffItem from '../TariffItem/TariffItem'

const Tariffs = (props) => {

    const [isLeft, setIsLeft] = useState(true);
    const [index, setIndex] = useState(3);
    const listRef = useRef(null);

    function scrollRight() {
        if (window.screen.availWidth > 520) {
            scrollToIndex(3);
            setIsLeft(false)

        }
    }

    function scrolLeft() {
        if (window.screen.availWidth > 520) {
            scrollToIndex(0);
            setIsLeft(true)

        }

    }

    function scrollToIndex(index) {
        const listNode = listRef.current;
        // This line assumes a particular DOM structure:
        const imgNode = listNode.querySelectorAll('#tariff-item')[index];
        imgNode.scrollIntoView({
            behavior: 'smooth',
        });
    }

    return (
        <div className={classes.tariffs__container} id='tariffs'>
            <div className={classes.tariffs__title_container}>
                <SectionTitle>Наші тарифи</SectionTitle>
                <div className={classes.tariffs__btns} >
                    <button className={isLeft ? classes.tariffs__btn_left : classes.tariffs__btn_left_active} onClick={() => scrolLeft()}></button>
                    <p>1...4</p>
                    <button className={isLeft ? classes.tariffs__btn_right : classes.tariffs__btn_right_active} onClick={() => scrollRight()}></button>
                </div>
            </div>

            <div className={classes.tariffs__items_container} ref={listRef}>
                <TariffItem title='Індивідуальний' qty='8 занять' price='2000 грн' desc='Заняття 2 рази на тиждень індивідуально з викладачем за авторською програмою' />
                <TariffItem title='Груповий' qty='8 занять' price='1500 грн' desc='Заняття в групах до 5 людей, 2 рази на тиждень за авторською програмою' />
                <TariffItem title='Разовий' qty='1 заняття' price='280 грн' desc='Проходить індивідуально, для тих хто прагне розібрати та вдосконалити конкретні теми' />
                <TariffItem title='Інтенсивний' qty='12 занять' price='2800 грн' desc='3 заняття на тиждень + участь в двух розмовних клубах на вибір' />
            </div>
        </div>
    )
}

export default Tariffs
