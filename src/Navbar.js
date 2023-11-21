import React from 'react';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="app-navbar">
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/about">À propos</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
