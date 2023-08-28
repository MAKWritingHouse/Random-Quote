import React from 'react';
import './style.scss'

const Footer = () => {
  return (
    <footer>
      <p>
        <a href='https://makwritinghouse.com' target='_blank'>
          MAK Writing House{' '}
        </a>
        - Random Quote &copy; {new Date().getFullYear()}. DEVELOP & MAINTAIN BY
        MAK DEVELOPMENT HOUSE.
      </p>
    </footer>
  );
};

export default Footer;
