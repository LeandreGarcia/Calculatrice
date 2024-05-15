import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState('');

  const appendToDisplay = (value) => {
    setDisplayValue(displayValue + value);
  };

  const clearDisplay = () => {
    setDisplayValue('');
  };

  const calculate = () => {
    try {
      const result = math.evaluate(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator-container">
    <h1>Calculatrice</h1>
    <div className="calculator">
      <input type="text" id="display" value={displayValue} readOnly />
      <div className="buttons">
        {['AC','%','/',7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', '0', '.', '='].map((item, index) => (
          <button key={index} className={(item === 'AC') ? 'gray-light long-button' : (item === '%' ? 'gray-light' : (['/', '*', '-', '+', '='].includes(item) ? 'orange' : (['0'].includes(item) ? 'gray-dark long-button' : ([1, 2, 3, 4, 5, 6, 7, 8, 9, '.'].includes(item) ? 'gray-dark' : ''))))} onClick={() => {
            if (item === '=') {
              calculate();
            } else if (item === 'AC') {
              clearDisplay();
            } else {
              appendToDisplay(item.toString());
            }
          }}>
            {item}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
  
  
}
export default App;

