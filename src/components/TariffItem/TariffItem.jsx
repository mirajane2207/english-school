import React from 'react'
import classes from './TariffItem.module.css'

const TariffItem = (props) => {
    return (
        <div className={classes.tariff__container}>
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
            <button>Придбати</button>
        </div>
    )
}

export default TariffItem
