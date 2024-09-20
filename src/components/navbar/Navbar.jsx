import React, { useState, useEffect, useRef } from 'react';
import './navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCart } from 'react-feather';
import CartSlider from '../cartslider/CartSlider';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Close cart if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="src/assets/logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navlinks ${isMobileMenuOpen ? 'active' : ''}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop-page">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="icons">
        <a href="">
          <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        {/* Cart icon triggers the cart slider */}
        <a href="#" onClick={toggleCart}>
          <ShoppingCart />
        </a>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop-page" onClick={toggleMobileMenu}>
                Shop
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* CartSlider Component */}
      <CartSlider isCartOpen={isCartOpen} toggleCart={toggleCart} cartRef={cartRef} />
    </nav>
  );
};

export default Navbar;
