import React, { useState } from 'react';
import './Navbar.css';
import Calculator from './Calculator';
import Timer from './Timer';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <h2><Timer /></h2>
      <button onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Open'} Calculator
      </button>
      {open && <ul>
        <li><Calculator /></li>
        <li>I don't like the colors of my app</li>
        <li>but I do like the numbers i've been getting.</li>
      </ul>}
    </nav>
  );
};

export default Navbar;
