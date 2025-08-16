import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1><Link to="/" onClick={closeMenu}>My Craft Store</Link></h1>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
        <div className={isOpen ? 'bar open' : 'bar'}></div>
      </div>
      <ul className={isOpen ? 'nav-menu open' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/products" className="nav-link" onClick={closeMenu}>Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
