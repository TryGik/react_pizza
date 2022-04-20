import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/';
import { Cart, Home } from './pages';

// import store from './redux/store';
import { setPizzas } from './redux/actions/pizzas';



// function App() {
//   // const [pizzas, setPizzas] = React.useState([]);

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then(({ data }) => setPizzas(data.pizzas));
//     // fetch('http://localhost:3000/db.json')
//     //   .then(responce => responce.json())
//     //   .then(json => setPizzas(json.pizzas))
//   }, []);

// console.log(pizzas)
//   return (
//     <>
//       <div className="wrapper">
//         <Header />
//         <div className="content">
//           <Routes>
//             <Route exact path="/" element={<Home items={pizzas} />} />
//             <Route path="/cart" element={<Cart />} />
//           </Routes>
//         </div>
//       </div>
//     </>
//   );
// }

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home items={this.props.items} />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
