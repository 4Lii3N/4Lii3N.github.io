import React from 'react';
import './Header.scss';
import logo from '@assets/blunt_logo.png';

const Header = () => {
  return (
    <div className="header">
      <img className='header__img' src={logo} />
    </div>
  );
}

export default Header;
