import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';

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
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  // console.log(category, sortBy)

  React.useEffect(() => {
    //так как присутствует роутинг, каждый раз при переходе из карзины к Хоуму заново идет запрос на сервер - что плохо
    dispatch(fetchPizzas());
  }, [category, sortBy]);

  //для избежания лишнего ререндера Category(less7~1:19:00)
  const onSelectCategory = React.useCallback(index => {
    dispatch(setCategory(index))
  }, [])

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames} />
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy}
          items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map(item => <PizzaBlock {...item} key={item.id} />) : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  )
}
