import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components';

export default function Home({ items }) {

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', ' Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map(item => <PizzaBlock {...item} key={item.id} />)}
      </div>
    </div>
  )
}
