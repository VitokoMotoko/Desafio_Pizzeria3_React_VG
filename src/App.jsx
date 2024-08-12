import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Cart from './Cart';

const App = () => {
  const [total, setTotal] = useState(0);

  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar total={total} />
        <div className="app-content">
          <Cart updateTotal={updateTotal} />
          {/* <Home /> */}
          {/* <RegisterPage /> */}
          {/* <LoginPage /> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;