import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div>
    <nav className={styles.container}>
      <h2>Math Magicians</h2>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li>|</li>
        <li><a href="/Calculator">Calculator</a></li>
        <li>|</li>
        <li><a href="/Quotes">Quotes</a></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
