import React from 'react'
import classes from './ForChildren.module.css'
import SectionTitle from '../SectionTitle/SectionTitle'
import ForChildrenItem from '../ForChildrenItem/ForChildrenItem'

const ForChildren = () => {
  return (
    <div className={classes.for_children__container}>
      <SectionTitle>Для дітей</SectionTitle>
      <div className={classes.for_children__content_container}>
        <ForChildrenItem title='Інтерактивні завдання' text='Учні разом з улюбленими персонажами з мультиків та ігор змагаються в різноманітних челенджах, грають в ігри, розв’язують безліч загадок та ребусів.'/>
        <ForChildrenItem title='Система винагород' text='За кожен урок дитина отримує бали, які потім можна буде обміняти на бенефіти: самостійно обрати тему заняття, виграти 15 хв улюбленої комп’ютерної гри під час заняття та багато інших.'/>
        <ForChildrenItem title='Лише жива мова' text='Вчимо те, що точно зможе знадобитись дітям у їх повсякденному житті і те, що вони зможуть використовувати у спілкуванні вже найближчим часом.'/>
        <ForChildrenItem title='Розмовні клуби' text='Кожні вихідні наша школа проводить різноманітні розмовні клуби для дітей різного віку та різних рівнів володіння мови.'/>
      </div>
    </div>
  )
}

export default ForChildren
