import React, { useState } from 'react';

export const initialFruits = [
  {
    id: 1,
    name: 'Apple',
    category: 'Fruit',
    image: 'https://tse2.mm.bing.net/th?id=OIP.5bLEGgrUJw9PXpPA3ReYBwHaGU&pid=Api&P=0',
    price: '', // Update the price to an empty string
    benefits: 'Rich in antioxidants and dietary fiber, promotes heart health',
    unit: 'KG',
  },
  // Rest of the fruit objects...
];

export default function FruitsForm() {
  const [fruits, setFruits] = useState(initialFruits);

  const handlePriceChange = (event, fruitId) => {
    const updatedFruits = fruits.map((fruit) => {
      if (fruit.id === fruitId) {
        return {
          ...fruit,
          price: event.target.value,
        };
      }
      return fruit;
    });
    setFruits(updatedFruits);
  };

  return (
    <div>
      {fruits.map((fruit) => (
        <div key={fruit.id}>
          <h2>{fruit.name}</h2>
          <p>Category: {fruit.category}</p>
          <img src={fruit.image} alt={fruit.name} />
          <p>Price: {fruit.price}</p>
          <p>Benefits: {fruit.benefits}</p>
          <p>Unit: {fruit.unit}</p>
          <input
            type="text"
            value={fruit.price}
            onChange={(event) => handlePriceChange(event, fruit.id)}
            placeholder="Enter price"
          />
        </div>
      ))}
    </div>
  );
}
