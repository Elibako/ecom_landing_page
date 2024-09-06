import React from 'react';
import './navbar.css'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch, faUser, faBell } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="src/assets/logo.svg" alt="Logo" />
      </div>
      <ul className="navlinks">
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="shop" smooth={true} duration={500} offset={-70}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="icons">
        <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
        <a href="#"><FontAwesomeIcon icon={faSearch} /></a>
        <a href="#"><FontAwesomeIcon icon={faUser} /></a>
        <a href="#"><FontAwesomeIcon icon={faBell} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
