import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';

import { selectPizzas } from '../redux/reducers/pizzas';
import { setCategory } from '../redux/reducers/filters';

const categoryNames = ['Мясные', 'Вегетарианская', ' Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' }
];


export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(selectPizzas);

  //для избежания лишнего ререндера Category(less7~1:19:00)
  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])


  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map(item => <PizzaBlock {...item} key={item.id} />)}
      </div>
    </div>
  )
}
