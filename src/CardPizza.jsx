import React from 'react';
import '../src/assets/CSS/CardPizza.css';

function CardPizza({ name, price, ingredients, img }) {
    return (
      <div className="card-pizza">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <hr />
        <h3>Ingredientes</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <hr />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button style={{ display: 'flex', alignItems: 'center' }}>
            Ver Más
            <img src="../src/assets/img/ojos.png" alt="Ver más" style={{ width: '20px', marginLeft: '5px' }} />
          </button>
          <button style={{ backgroundColor: 'black', color: 'white', display: 'flex', alignItems: 'center' }}>
            Añadir
            <img src="../src/assets/img/carrito.png" alt="Añadir al carrito" style={{ width: '20px', marginLeft: '5px' }} />
          </button>
        </div>
      </div>
    );
}

export default CardPizza;