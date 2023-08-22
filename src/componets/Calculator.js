import React, { useState } from 'react';
import styles from './Calculator.module.css';
import Button from './Button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const buttons = [
    'AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=',
  ];

  const handleClick = (btn) => {
    setObj(calculate(obj, btn));
  };

  return (
    <div className={styles.home}>
      <div className={styles.inner}>
        <div className={styles.result}>
          <input className={styles.resbox} value={obj.next || obj.total || '0'} />
        </div>
        <div className={styles.btns}>
          {buttons.map((value) => (
            <Button
              value={value}
              key={value}
              onClick={() => handleClick(value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
