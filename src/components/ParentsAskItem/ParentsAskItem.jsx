import { React, useState } from 'react'
import classes from './ParentsAskItem.module.css'

const ParentsAskItem = (props) => {
    const [state, setState] = useState('opened');

    function changeState() {
        setState(previous => previous === 'closed' ? 'opened' : 'closed')
    }

    return (
        <div className={classes.item__container}>
            {state === 'closed'
                ? <div className={classes.item__closed_container}> <h3>{props.title}</h3>
                    <button onClick={changeState} className={classes.btn_open}></button></div>
                : <div className={classes.item__opened_container}>
                    <div className={classes.item__opened_content_container}>
                    <h3>{props.title}</h3>
                        <button onClick={changeState} className={classes.btn_close}></button>
                    </div>

                    <hr />
                    <p>{props.text}</p>
                </div>
            }


        </div>
    )
}

export default ParentsAskItem
