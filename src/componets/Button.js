// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.css';

function Button({ value }) {
  let buttonClassName = classes.calcBtns;

 
  if (value === '0' || value === '0') {
    buttonClassName += ` ${classes.res}`;
  } else if (value === 'X' || value === '-' || value === '=' || value === '+') {
    buttonClassName += ` ${classes.side}`;
  }

  return <div className={buttonClassName}>{value}</div>;
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
