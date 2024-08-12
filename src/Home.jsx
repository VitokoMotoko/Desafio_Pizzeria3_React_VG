import React from 'react';
import Header from './header';
import CardPizza from './CardPizza';
import { pizzas } from './assets/JavaScripts/pizzas'; //este lo hice sin el archivo ya que no estaba en el recurso de apoyo

function Home() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;