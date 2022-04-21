import React from 'react'
import PropTypes from 'prop-types';
/*Проверка на null и underfined, добавления класса актив */
/*React.memo предотврящает лишний рендер*/
const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
        {items && items.map((item, index) => <li
          className={activeCategory === index ? 'active' : ''}
          onClick={() => onClickCategory(index)}
          key={index + item}>{item}</li>)} {/*проверка items && на undefined*/}
      </ul>
    </div>
  )
})

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func.isRequired
};

Categories.defaultProps = {
  items: [],
};

export default Categories;
