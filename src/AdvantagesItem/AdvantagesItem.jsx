import React from 'react'
import classes from './AdvantagesItem.module.css'
import hrImg from './adv-hr.png'

const AdvantagesItem = (props) => {
    return (
        <div>
            <div className={classes.advantage__container}>
                <h3 className={classes.advantage__title}>{props.title}</h3>
                <p className={classes.advantage__desc}>{props.desc}</p>
            </div>
            <img src={hrImg} alt="" />
        </div>
    )
}

export default AdvantagesItem
