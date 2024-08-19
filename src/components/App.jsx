import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';
import { pizzas } from '../assets/JavaScripts/pizzas';

const App = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingPizza = prevCart.find(item => item.id === pizza.id);
      if (existingPizza) {
        return prevCart.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar total={total} />
        <div className="app-content">
          <Home addToCart={addToCart} />
          <Cart cart={cart} setCart={setCart} updateTotal={updateTotal} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;