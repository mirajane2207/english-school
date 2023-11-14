import { React, useState } from 'react';
import classes from './ParentsAskItem.module.css';

const ParentsAskItem = (props) => {
    const [visible, setVisible] = useState(true)

    function changeState() {
        setVisible(!visible)
    }

    const rootClasses = [classes.item__opened_container]
    if(visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={classes.item__container}>
                <div className={rootClasses.join(' ')} >
                    <div className={classes.item__opened_content_container}>
                        <h3>{props.title}</h3>
                        <button onClick={changeState}></button>
                    </div>
                    {
                        !visible
                        ? <p>{props.text}</p>
                        : <span></span>
                    }
                </div>
        </div>
    )
}

export default ParentsAskItem
