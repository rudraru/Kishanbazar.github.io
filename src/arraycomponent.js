import React, { useState } from 'react';

const ArrayComponent = () => {
  const [myArray, setMyArray] = useState([1, 2, 3, 4, 5]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = Number(e.target.value);
    setMyArray((prevArray) => [...prevArray, newValue]);
    e.target.value = '';
  };

  return (
    <div>
      <h2>Array Component</h2>
      <ul>
        {myArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))} 
      </ul>

      <h2>Set Array Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="array-input">Array Value:</label>
        <input type="number" id="array-input" />
        <button type="submit">Set Value</button>
      </form>
    </div>
  );
};

export default ArrayComponent;
