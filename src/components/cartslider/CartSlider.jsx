import React from 'react';
import './CartSlider.css';
import { Link } from 'react-router-dom';

const CartSlider = ({ isCartOpen, toggleCart, cartRef }) => {
  return (
    <>
      <div className={`cart-slider ${isCartOpen ? 'open' : ''}`} ref={cartRef}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="close-button" onClick={toggleCart}>X</button>
        </div>
        <div className="cart-items">
          <ul>
            <li><Link to="/checkout" onClick={toggleCart}>Go to Checkout</Link></li>
            <li><Link to="/products" onClick={toggleCart}>Continue Shopping</Link></li>
            <li><Link to="/cart" onClick={toggleCart}>View Cart</Link></li>
          </ul>
        </div>
      </div>
      {/* Overlay */}
      {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}
    </>
  );
};

export default CartSlider;
