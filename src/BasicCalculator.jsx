import React, { useState } from 'react';
import "./BasicCalculator.css";

const BasicCalculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');
  const [difference, setDifference] = useState('');
  const [product, setProduct] = useState('');
  const [quotient, setQuotient] = useState('');

  const calculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!isNaN(number1) && !isNaN(number2)) {
      setSum(`Sum: ${number1 + number2}`);
      setDifference(`Difference: ${number1 - number2}`);
      setProduct(`Product: ${number1 * number2}`);
      setQuotient(`Quotient: ${number1 / number2}`);
    } else {
      // Handle invalid input
      alert('Please enter valid numbers.');
    }
  };

  return (
    <div className="container">
      <h2>Basic Calculator</h2>
      
      <label className="label">
        Enter first number:
        <input type="number" className="input" value={num1} onChange={(e) => setNum1(e.target.value)} />
      </label>
      <br />
      <label className="label">
        Enter second number:
        <input type="number" className="input" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </label>
      <br />
      <button className="button" onClick={calculate}>Calculate</button>
      <p className="result">{sum}</p>
      <p className="result">{difference}</p>
      <p className="result">{product}</p>
      <p className="result">{quotient}</p>
    </div>
  );
};

export default BasicCalculator;
