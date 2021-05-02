import React from 'react';
import './header.styles.scss';
import Navbar from '../navbar/navbar.components';
const Header = () => {
  return (
    <section className="header">
      <div className="container">
        <Navbar />
        <div className="header__overlay"></div>
        <div className="header__content">
          <h1 className="header__content--title">
            Immersive Experiences That Deliver
          </h1>
        </div>
      </div>
    </section>
  );
};
export default Header;
