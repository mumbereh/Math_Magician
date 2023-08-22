import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Calculator from './components/Calculator.js';
import Quote from './components/Quote.js';

function App() {
  return (
    <>
      <Navbar />
      <Calculator />
      <Quote />
      <Outlet />
    </>
  );
}

export default App;
