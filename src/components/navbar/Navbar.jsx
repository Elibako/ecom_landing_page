import React, { useState } from 'react';
import './navbar.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'; // Import from react-router-dom
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ShoppingCart } from 'react-feather';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <Link to="/shop-page">Shop</Link> {/* Update path to '/shop-page' */}
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
        <a href="">
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
    </nav>
  );
};

export default Navbar;
