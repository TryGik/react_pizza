import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

import { fetchPizzas } from '../redux/actions/pizzas';

const categoryNames = ['Мясные', 'Вегетарианская', ' Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'alphabet' }
];


export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);

  React.useEffect(() => {
    //так как присутствует роутинг, каждый раз при переходе из карзины к Хоуму заново идет запрос на сервер - что плохо
    dispatch(fetchPizzas());
  }, []);

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
