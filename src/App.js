import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/';
import { Cart, Home } from './pages';

import { setPizzas } from './redux/actions/pizzas';



function App() {
  const dispatch = useDispatch();
  //const storeArr = useSelector((state) => { return {items: state.pizzas.items}
  // const { items } = useSelector(({ pizzas, filters }) => {
  //   return {
  //     items: pizzas.items,
  //     sortBy: filters.sortBy
  //   }
  // });
  /*Testing rerender
  window.test = () => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => {
        dispatch(setPizzas(data.pizzas));
      });
  };*/

  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
        // console.log("Был отрендер") в Арр рендерится только 1 раз, а в Хоум каждый раз при переходе /home
        dispatch(setPizzas(data))
      });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

// class App extends React.Component {

//   componentDidMount() {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//     });
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <>
//         <div className="wrapper">
//           <Header />
//           <div className="content">
//             <Routes>
//               <Route exact path="/" element={<Home items={this.props.items} />} />
//               <Route path="/cart" element={<Cart />} />
//             </Routes>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items)),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
