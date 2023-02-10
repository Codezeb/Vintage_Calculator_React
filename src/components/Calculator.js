import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (value) => {
    setDisplayValue(displayValue === '0' ? value : displayValue + value);
  };

  const handleEvaluate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  return (
    <div className="calculator-container">
      <div className="display-container">
        <div className="display">{displayValue}</div>
      </div>
      <div className="button-container">
        <button className="calculator-button" onClick={() => handleClick('7')}>7</button>
        <button className="calculator-button" onClick={() => handleClick('8')}>8</button>
        <button className="calculator-button" onClick={() => handleClick('9')}>9</button>
        <button className="calculator-button" onClick={() => handleClick('/')}>/</button>
        <button className="calculator-button" onClick={() => handleClick('4')}>4</button>
        <button className="calculator-button" onClick={() => handleClick('5')}>5</button>
        <button className="calculator-button" onClick={() => handleClick('6')}>6</button>
        <button className="calculator-button" onClick={() => handleClick('*')}>x</button>
        <button className="calculator-button" onClick={() => handleClick('1')}>1</button>
        <button className="calculator-button" onClick={() => handleClick('2')}>2</button>
        <button className="calculator-button" onClick={() => handleClick('3')}>3</button>
        <button className="calculator-button" onClick={() => handleClick('-')}>-</button>
        <button className="calculator-button" onClick={() => handleClick('0')}>0</button>
        <button className="calculator-button" onClick={() => handleClick('.')}>.</button>
        <button className="calculator-button" onClick={handleEvaluate}>=</button>
        <button className="calculator-button" onClick={() => handleClick('+')}>+</button>
        <button className="calculator-button-ac" onClick={handleClear}>AC</button>
      </div>
    </div>
  );
};

export default Calculator;
