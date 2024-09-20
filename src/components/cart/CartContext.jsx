// CartContext.js
import React, { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// Cart provider to wrap around components needing cart access
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
