import React, { useState } from 'react';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [currentValue, setCurrentValue] = useState(null);
  const [operator, setOperator] = useState(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleNumberClick = (number) => {
    setDisplayValue(resetDisplay ? String(number) : displayValue === '0' ? String(number) : displayValue + number);
    setResetDisplay(false);
  };

  const handleOperatorClick = (nextOperator) => {
    if (currentValue === null) {
      setCurrentValue(parseFloat(displayValue));
    } else if (operator) {
      const result = performCalculation();
      setDisplayValue(String(result));
      setCurrentValue(result);
    }

    setOperator(nextOperator);
    setResetDisplay(true);
  };

  const performCalculation = () => {
    const prevValue = currentValue;
    const nextValue = parseFloat(displayValue);

    switch (operator) {
      case '+':
        return prevValue + nextValue;
      case '-':
        return prevValue - nextValue;
      case '*':
        return prevValue * nextValue;
      case '/':
        return prevValue / nextValue;
      default:
        return nextValue;
    }
  };

  const handleEqualClick = () => {
    if (!operator) return;
    const result = performCalculation();
    setDisplayValue(String(result));
    setCurrentValue(result);
    setOperator(null);
  };

  const handleClearClick = () => {
    setDisplayValue('0');
    setCurrentValue(null);
    setOperator(null);
  };

  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>

        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>

        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>

        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleOperatorClick('.')}>.</button>
        <button onClick={handleEqualClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>

        <button onClick={handleClearClick}>C</button>
      </div>
    </div>
  );
}

export default App;

