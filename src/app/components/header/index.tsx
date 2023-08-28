import React from 'react';
import Image from 'next/image';
import logo from '../../../../public/logo.png';
import './style.scss'

const Header = () => {
  return (
    <header>
      <a href='#' id='currentPage'>
        <Image
          src={logo}
          alt='Random Quote | MAK Writing House | MAKSTYLE119'
          height={50}
        />
      </a>
    </header>
  );
};

export default Header;
