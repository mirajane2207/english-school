import { React, useRef, useState } from 'react'
import classes from './ParentsAskItem.module.css'

const ParentsAskItem = (props) => {
    const [state, setState] = useState('closed');
    const [visible, setVisible] = useState(true)

    function changeState() {
        setState(previous => previous === 'closed' ? 'opened' : 'closed')
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
                    <hr />
                    <p>{props.text}</p>
                </div>
        </div>
    )
}

export default ParentsAskItem
