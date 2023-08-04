import React from 'react'
import classes from './AdvantagesItem.module.css'

const AdvantagesItem = (props) => {
    return (
            <div className={classes.advantage__container}>
                <h3 className={classes.advantage__title}>{props.title}</h3>
                <p className={classes.advantage__desc}>{props.desc}</p>
            </div>
    )
}

export default AdvantagesItem
