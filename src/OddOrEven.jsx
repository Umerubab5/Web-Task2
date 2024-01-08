// OddOrEven.js
import React, { useState } from 'react';

const OddOrEven = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkOddOrEven = () => {
    const num = parseInt(number);

    if (!isNaN(num)) {
      setResult(`${num % 2 === 0 ? 'Even' : 'Odd'}`);
    } else {
      // Handle invalid input
      alert('Please enter a valid number.');
    }
  };

  return (
    <div className="container">
      <h2>Odd or Even</h2>
     
      <label className="label">
        Enter a number:
        <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <button className="button" onClick={checkOddOrEven}>Check</button>
      <p className="result">{result}</p>
    </div>
  );
};

export default OddOrEven;
