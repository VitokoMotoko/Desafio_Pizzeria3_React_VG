import React, { useState, useEffect } from 'react';
import { pizzaCart } from './assets/JavaScripts/pizzas';
import './assets/CSS/Cart.css';

function Cart({ updateTotal }) {
  const [cart, setCart] = useState(pizzaCart);

  useEffect(() => {
    const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
    updateTotal(total);
  }, [cart, updateTotal]);

  const increaseQuantity = (index) => {
    const newCart = [...cart];
    newCart[index].quantity += 1;
    setCart(newCart);
  };

  const decreaseQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 0) {
      newCart[index].quantity -= 1;
    }
    setCart(newCart);
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.map((pizza, index) => (
        <div key={index} className="cart-item">
          <img src={pizza.img} alt={pizza.name} />
          <span>{pizza.name}</span>
          <span>${pizza.price}</span>
          <div>
            <button onClick={() => decreaseQuantity(index)} disabled={pizza.quantity === 0}>-</button>
            <span>{pizza.quantity}</span>
            <button onClick={() => increaseQuantity(index)}>+</button>
          </div>
        </div>
      ))}
      <h3 className="cart-total">Total: ${total.toLocaleString()}</h3>
      <button className="cart-checkout">Pagar</button>
    </div>
  );
}

export default Cart;