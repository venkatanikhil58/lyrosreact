// src/components/Cart.js
import React, { useState } from 'react';

const Cart = () => {
  // Initialize state to keep track of cart quantity
  const [cartQuantity, setCartQuantity] = useState(0);

  // Function to handle showing the cart quantity
  const showQuantity = () => {
    console.log(`Cart quantity: ${cartQuantity}`);
  };

  // Function to handle adding 1 to the cart quantity
  const addToCart = () => {
    setCartQuantity(cartQuantity + 1);
    console.log(`Cart quantity: ${cartQuantity + 1}`);
  };

  // Function to handle adding 2 to the cart quantity
  const addToCart2 = () => {
    setCartQuantity(cartQuantity + 2);
    console.log(`Cart quantity: ${cartQuantity + 2}`);
  };

  // Function to handle adding 3 to the cart quantity
  const addToCart3 = () => {
    setCartQuantity(cartQuantity + 3);
    console.log(`Cart quantity: ${cartQuantity + 3}`);
  };

  // Function to handle resetting the cart quantity
  const resetCart = () => {
    setCartQuantity(0);
    console.log('Cart quantity reset to 0');
  };

  return (
    <div>
      <button onClick={showQuantity}>Show Quantity</button>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={addToCart2}>+2</button>
      <button onClick={addToCart3}>+3</button>
      <button onClick={resetCart}>Reset Cart</button>
      <p>Cart Quantity: {cartQuantity}</p>
    </div>
  );
};

export default Cart;
