import {React, useState} from 'react'
import classes from './TariffItem.module.css'
import ContactUsModal from '../ContactUsModal/ContactUsModal';

const TariffItem = (props) => {
    const [modal, setModal] = useState(false);
    function showModal() {
        setModal(!modal)
    }
    return (
        <div className={classes.tariff__container} id='tariff-item'>
            <div className={classes.tariff__title}>
                <h3>{props.title}</h3>
                <div className={classes.tariff__details}>
                    <p className={classes.tariff__qty}>{props.qty}</p>
                    <h3>{props.price}</h3>
                </div>
            </div>
            <p className={classes.tariff__desc}>
                {props.desc}
            </p>
            <button className={classes.tariff_btn} onClick={showModal}>Придбати</button>
            <ContactUsModal visible={modal} setVisible={showModal} />
        </div>
    )
}

export default TariffItem
