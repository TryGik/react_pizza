import React from 'react'

/*Проверка на null и underfined, добавления класса актив */
/*React.memo предотврящает лишний рендер*/
const Categories = React.memo(function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = index => {
    setActiveItem(index);
    onClickItem(index);
  };

  console.log('RENDERED CATEGORY')

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null)}>Все</li>
        {items && items.map((item, index) => <li
          className={activeItem === index ? 'active' : ''}
          onClick={() => onSelectItem(index)}
          key={index + item}>{item}</li>)} {/*проверка items && на undefined*/}
      </ul>
    </div>
  )
})

export default Categories;
// class Categories extends React.Component {
//   state = {
//     activeItem: null
//   };

//   onSelectItem = index => {
//     this.setState({ activeItem: index });
//   }

//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((item, index) =>
//             <li
//               className={this.state.activeItem === index ? 'active' : ''}
//               onClick={() => this.onSelectItem(index)}
//               key={index + item}>{item}</li>)}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Categories
