import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/';
import { Cart, Home } from './pages';

import { setPizzas } from './redux/reducers/pizzas';



function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
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



