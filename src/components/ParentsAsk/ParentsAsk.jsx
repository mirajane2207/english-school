import React from 'react'
import classes from './ParentsAsk.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ParentsAskItem from '../ParentsAskItem/ParentsAskItem'

const ParentsAsk = () => {
    return (
        <div className={classes.parents_ask__container} id='parentsAsk'>
            <SectionTitle>Батьки питають</SectionTitle>
            <div className={classes.parents_ask__content_container}>
                <hr />
                <ParentsAskItem title='Яка тривалість уроку?' text='Урок проходить на одній із наступних платформ - Zoom або Skype. Ви самі можете обрати де займатись вам зручніше та комфортніше.'/>
                <ParentsAskItem title='Де проходить урок?' text='Урок проходить на одній із наступних платформ - Zoom або Skype. Ви самі можете обрати де займатись вам зручніше та комфортніше.'/>
                <ParentsAskItem title='Чи даються домашні завдання та в якому форматі?' text='Урок проходить на одній із наступних платформ - Zoom або Skype. Ви самі можете обрати де займатись вам зручніше та комфортніше.'/>
                <ParentsAskItem title='Що таке система винагород та як вона працює?' text='Урок проходить на одній із наступних платформ - Zoom або Skype. Ви самі можете обрати де займатись вам зручніше та комфортніше.'/>
                <ParentsAskItem title='Скільки дітей у групі?' text='Урок проходить на одній із наступних платформ - Zoom або Skype. Ви самі можете обрати де займатись вам зручніше та комфортніше.'/>
            </div>
        </div>
    )
}

export default ParentsAsk
