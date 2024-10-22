import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [lastResult, setLastResult] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  const [lastOperator, setLastOperator] = useState('');
  const [lastNumber, setLastNumber] = useState(0);

  const clearAllDisplay = () => {
    setDisplay('');
    setLastResult(0);
    setIsCalculated(false);
    setLastOperator('');
    setLastNumber(0);
  };

  const clearDisplay = () => {
    if (display.length > 0) {
      setDisplay(display.slice(0, -1));
    }
  };

  const appendToDisplay = (value) => {
    if (isCalculated && !isOperator(value)) {
      setDisplay('');
      setIsCalculated(false);
    }
    setDisplay(prev => prev + value);
  };

  const opcalculator = (operator) => {
    if (isCalculated) {
      setIsCalculated(false);
    }
    setLastOperator(operator);
    setDisplay(prev => prev + operator);
  };

  const isOperator = (value) => {
    return value === "+" || value === "-" || value === "*" || value === "/";
  };

  const calculate = () => {
    let numbers = [];
    let operators = [];
    let currentNumber = '';

    for (let char of display) {
      if (char >= "0" && char <= "9" || char === ".") {
        currentNumber += char;
      } else if (isOperator(char)) {
        numbers.push(parseFloat(currentNumber));
        operators.push(char);
        currentNumber = '';
      }
    }
    
    if (currentNumber !== "") {
      numbers.push(parseFloat(currentNumber));
    }

    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
      switch (operators[i]) {
        case '+':
          result += numbers[i + 1];
          break;
        case '-':
          result -= numbers[i + 1];
          break;
        case '*':
          result *= numbers[i + 1];
          break;
        case '/':
          result /= numbers[i + 1];
          break;
        default:
          break;
      }
    }

    if (isCalculated) {
      switch (lastOperator) {
        case '+':
          result += lastNumber;
          break;
        case '-':
          result -= lastNumber;
          break;
        case '*':
          result *= lastNumber;
          break;
        case '/':
          result /= lastNumber;
          break;
        default:
          break;
      }
    }

    setDisplay(result.toString());
    setLastResult(result);
    setLastNumber(result);
    setIsCalculated(true);
  };

  const handleKeyPress = (e) => {
    switch (e.key) {
      case 'Enter':
        calculate();
        break;
      case 'Backspace':
        clearDisplay();
        break;
      case 'Escape':
      case 'Delete':
        clearAllDisplay();
        break;
      default:
        if (isOperator(e.key) || /^[0-9.]$/.test(e.key)) {
          appendToDisplay(e.key);
        }
        break;
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [display]);

  return (
    <div className="cal-container">
      <input className="display" value={display} disabled />
      <div className="button-row">
        <button onClick={clearAllDisplay} className="calc-button ac">AC</button>
        <button onClick={clearDisplay} className="calc-button del">C</button>
        <button onClick={() => opcalculator('/')} className="calc-button divide">÷</button>
      </div>
      <div className="button-row">
        <button onClick={() => appendToDisplay('7')} className="calc-button seven">7</button>
        <button onClick={() => appendToDisplay('8')} className="calc-button eight">8</button>
        <button onClick={() => appendToDisplay('9')} className="calc-button nine">9</button>
        <button onClick={() => opcalculator('*')} className="calc-button multiply">X</button>
      </div>
      <div className="button-row">
        <button onClick={() => appendToDisplay('4')} className="calc-button four">4</button>
        <button onClick={() => appendToDisplay('5')} className="calc-button five">5</button>
        <button onClick={() => appendToDisplay('6')} className="calc-button six">6</button>
        <button onClick={() => opcalculator('-')} className="calc-button minus">-</button>
      </div>
      <div className="button-row">
        <button onClick={() => appendToDisplay('1')} className="calc-button one">1</button>
        <button onClick={() => appendToDisplay('2')} className="calc-button two">2</button>
        <button onClick={() => appendToDisplay('3')} className="calc-button three">3</button>
        <button onClick={() => opcalculator('+')} className="calc-button plus">+</button>
      </div>
      <div className="button-row">
        <button onClick={() => appendToDisplay('0')} className="calc-button zero">0</button>
        <button onClick={() => appendToDisplay('.')} className="calc-button point">.</button>
        <button onClick={calculate} className="calc-button equal">=</button>
      </div>
    </div>
  );
};

export default Calculator;
