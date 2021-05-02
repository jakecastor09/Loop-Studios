import React from 'react';

import './navbar.style.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">loopstudios</div>
      <ul className="navbar__items">
        <li className="navbar__item">
          <a href="#about">About</a>
        </li>
        <li className="navbar__item">
          <a href="#carrers">Carrers</a>
        </li>
        <li className="navbar__item">
          <a href="#events">Events</a>
        </li>
        <li className="navbar__item">
          <a href="#products">Products</a>
        </li>
        <li className="navbar__item">
          <a href="#support">Support</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
