import React, { useState } from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'
import SectionTitle from '../SectionTitle/SectionTitle'
import classes from './Reviews.module.css'
import personImg from './reviews-person.svg'

const Reviews = ({ scrollTo }) => {
    const [visible, setVisible] = useState(false);
    const rootClasses = [classes.reviews__items_container]

    if (visible) {
        rootClasses.push(classes.full)
    }

    function showAll() {
        setVisible(true)
    }

    function hideAll() {
        setVisible(false)
        scrollTo('#reviews')
    }

    return (
        <div className={classes.reviews__container} id='reviews'>
            <div>
                <SectionTitle>Відгуки про нас</SectionTitle>
                <img src={personImg} alt="" className={classes.reviews__img} />
            </div>
            <div className={classes.reviews__content_container}>
                <div className={rootClasses.join(' ')}>
                    <ReviewItem name='Конопленко Євген' text='Заняття проходять у цікавому розважальному форматі, моя дочка займається в цій школі вже майже рік, є помітні результати, а головне дитина має бажання вчитись та із задоволенням приєднується до кожного уроку' />
                    <ReviewItem name='Голубинська Інна' text='Проходили навчання всією сім’єю - враження лише позитивні. Наразі ми живемо за кордоном, і можемо вільно спілкуватись англійською. Безмежно вдячні викладачам даної школи за те, що допомогли нам з чоловіком подолати мовний бар’єр, а дітям вивчити мову з нуля.' />
                    <ReviewItem name='Пилипченко Дарія' text='Я займаюсь в цій школі вже третій місяць, враховуючи мої побажання викладач порадив курс розмовної англійської, дуже подобається подача матеріалу, багато практики використання мови в повсякденному житті, викладачі уважні та приємні ' />
                    <ReviewItem name='Ніжинська Уляна' text='Дуже рада, що знайшла цю школу! Довго вибирала серед багатьох інших онлайн-шкіл, однак ні разу не пошкодувала, що обрала саме цю. Чудові викладачі, цікаві заняття, багато авторських курсів, мега позитивна та невимушена атмосфера на розмовних клубах.' />
                    <ReviewItem name='Григорович Юрій' text='Моя дитина в захваті від цієї школи! З нетерпінням чекає кожного заняття. Займається в групці вже декілька місяців і я дуже задоволена результатом від навчання. Викладачі дійсно майстри своєї справи -пояснюють все дуже доступно , постійно заохочують до навчання' />
                    <ReviewItem name='Бернацька Леся' text='Вивчаю англійську  приблизно 8 місяців, займаюся з викладачем по скайпу, беру участь в "Розмовному клубі", вивчаю мову по улюблених піснях, Найбільший плюс - немає прив"язки до міста чи країни (головне, щоб був інтернет:)' />
                    <ReviewItem name='Марунчак Настя' text='Вітаю. Дуже подобається англійська для дітей у цій школі. Дитина чекає на уроки з нетерпінням. Викладач Юлія нам настільки подобається, що я також чекаю занять разом з дитиною :)))' />
                    <ReviewItem name='Пашук Анжела' text='Моя дочка дуже хвилювалася. Дуже добрий і терплячий учитель, а уроки настільки захопливі, що дитині хочеться, щоб урок відбувся якнайшвидше' />
                    <ReviewItem name='Сиченко Тарас' text='Дитині дуже подобається. Відвідуємо як індивідуальні заняття, так і групові розмовні клуби (3-6 дітей одночасно). Уроки у цікавій для дитини формі. Рекомендую.' />
                    <div className={visible ? [classes.test, classes.disabled].join(' ') : classes.test}></div>
                </div>

                {
                    !visible
                        ? <button onClick={showAll}>Подивитись усі відгуки</button>
                        : <button onClick={hideAll}>Приховати усі відгуки</button>
                }
            </div>
        </div>
    )
}

export default Reviews
