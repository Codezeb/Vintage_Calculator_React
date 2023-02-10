import React from 'react';
import './Footer.css'

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <p>
        <small>Copyright © {year} Seb Gonzilla</small>
      </p>
    </footer>
  );
};

export default Footer;