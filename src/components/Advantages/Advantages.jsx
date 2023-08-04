import React from 'react'
import classes from './Advantages.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import AdvantagesItem from '../AdvantagesItem/AdvantagesItem'


const Advantages = () => {
    return (
        <div className={classes.advantages__container}>
            <SectionTitle>Наші переваги</SectionTitle>
            <div className={classes.advantages__list}>
                <AdvantagesItem title='Оригінально' desc='Авторські програми розроблені з урахуванням сучасних методик викладання та найактуальніших потреб наших клієнтів' />
                <AdvantagesItem title='Індивідуально' desc='Індивідуальний підхід до кожного клієнта. Ми максимально враховуємо всі побажання наших студентів - від термінів вивчення мови до формату проведення занять, смаків та уподобань.' />
                <AdvantagesItem title='Розмовні клуби' desc='Щотижня в кожного студента є можливість приєднатись до різноманітних розмовних клубів задля того щоб подолати свій мовний бар’єр та попрактикувати навички спілкування.' />
                <AdvantagesItem title='Інтерактивно' desc='Відповідно до рівня та побажань клієнта наші викладачі підбирають цікаві матеріали до кожної теми - фрагменти серіалів, уривки з відомих книг, а також підбірки новин у сфері політики, культури, спорту та моди.' />
                <AdvantagesItem title='З досвідом' desc='Всі наші викладачі мають досвід роботи від 5 років та постійно проходять різноманітні курси, вебінари та майстер-класи для підвищення своєї кваліфікації, а також пошуку нових, креативних ідей для наших занять.' />
            </div>
        </div>
    )
}

export default Advantages
