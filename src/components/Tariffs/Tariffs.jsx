import { React, useState, useRef } from 'react'
import classes from './Tariffs.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import TariffItem from '../TariffItem/TariffItem'

const Tariffs = (props) => {

    const [isLeftActive, setIsLeftActive] = useState(false);
    const [isRightActive, setIsRightActive] = useState(true);
    const [index, setIndex] = useState('#first');
    const listRef = useRef(null);

    function scroll(qty) {
        listRef.current.scrollBy({
            left: qty,
            behavior: "smooth"
        })
    }

    function scrollRight() {
        if (window.screen.availWidth > 1184) {
            scroll(320)
            setIsLeftActive(true)
            setIsRightActive(false)
        } else {
            switch (index) {
                case '#first':
                    setIndex('#second');
                    scroll(260)
                    setIsLeftActive(true)
                    break;
                case '#second':
                    setIndex('#third');
                    scroll(250)
                    setIsLeftActive(true)
                    break;
                case '#third':
                    setIndex('#fourth');
                    scroll(270)
                    setIsRightActive(false)
                    break;
                default: break;
            }
        }
    }

    function scrollLeft() {
        if (window.screen.availWidth > 1184) {
            scroll(-320)
            setIsLeftActive(false)
            setIsRightActive(true)
        } else {
            switch (index) {
                case '#second':
                    setIndex('#first');
                    scroll(-300)
                    setIsLeftActive(false)
                    break;
                case '#third':
                    setIndex('#second');
                    scroll(-300)
                    break;
                case '#fourth':
                    setIndex('#third');
                    scroll(-280)
                    setIsRightActive(true)
                    break;
                default: break;
            }
        }
    }

    return (
        <div className={classes.tariffs__container}>
            <div id='tariffs' className={classes.tariffs__title_container}>
                <SectionTitle>Наші тарифи</SectionTitle>
                <div className={classes.tariffs__btns} >
                    <button className={isLeftActive ? classes.tariffs__btn_left_active : classes.tariffs__btn_left} onClick={() => scrollLeft()}></button>
                    <p>1...4</p>
                    <button className={isRightActive ? classes.tariffs__btn_right : classes.tariffs__btn_right_active} onClick={() => scrollRight()}></button>
                </div>
            </div>

            <div className={classes.tariffs__items_container} ref={listRef}>
                <TariffItem title='Індивідуальний' qty='8 занять' price='2000 грн' desc='Заняття 2 рази на тиждень індивідуально з викладачем за авторською програмою' />
                <TariffItem title='Груповий' qty='8 занять' price='1500 грн' desc='Заняття в групах до 5 людей, 2 рази на тиждень за авторською програмою' />
                <TariffItem title='Разовий' qty='1 заняття' price='280 грн' desc='Проходить індивідуально, для тих хто прагне розібрати та вдосконалити конкретні теми' />
                <TariffItem title='Інтенсивний' qty='12 занять' price='2800 грн' desc='3 заняття на тиждень + участь в двух розмовних клубах на вибір' />
            </div>
            <span className={classes.rect}></span>
        </div>
    )
}

export default Tariffs
