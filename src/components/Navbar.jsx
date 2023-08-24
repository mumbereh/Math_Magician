import React from 'react';
import './Navbar.css';

const GlobalNav = () => (
  <nav className="container">
    <h2>Math Magicians</h2>
    <ul>
      <li><a href="/Home">Home</a></li>
      
      <li><a href="/Calculator">Calculator</a></li>
    
      <li><a href="/Quotes">Quotes</a></li>
    </ul>
  </nav>
);

export default GlobalNav;
