import React from 'react';
import classes from './Home.module.css';
import Button from './Button';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      object: {
        total: 0,
        next: 0,
        operation: '',
      },
    };
  }

  handleClick(btnLabel) {
    const obj = this.state;
    this.setState({ object: calculate(obj, btnLabel) });
    console.log(this.state);
  }

  render() {
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
            {buttons.map((value) => (
              <Button
                value={value}
                key={value}
                // onClick={this.handleClick(value)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
