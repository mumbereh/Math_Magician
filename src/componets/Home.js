import React from 'react';
import classes from './Home.module.css';
import Button from './Button';

export default function Home() {
  const buttons = [
    'AC', '+/-', '%', '+', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox} />
        </div>
        <div className={classes.btns}>
          {buttons.map((value) => <Button value={value} key={value} />)}
        </div>
      </div>
    </div>
  );
}
