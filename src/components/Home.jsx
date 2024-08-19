import React from 'react';
import Header from './header';
import CardPizza from './CardPizza';
import { pizzas } from '../assets/JavaScripts/pizzas';
import '../assets/CSS/Home.css';

function Home({ addToCart }) {
  return (
    <div>
      <Header />
      <div className="container cards-container">
        <div className="row">
          {pizzas.map((pizza, index) => (
            <div key={index} className="col-md-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;