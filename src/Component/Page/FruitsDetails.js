import React from 'react';
import { useParams } from 'react-router-dom';

import fruits from './Card';

const FruitDetails = () => {
  const { fruitId } = useParams();
  const fruit = fruits.find(item => item.id === parseInt(fruitId));

  if (!fruit) {
    return <div className='errloading'>Error loading fruit details.</div>;
  }

  return (
    <div className="fruit-details">
      <h1 className="fruit-details__title">Fruit Details</h1>
      <div className="fruit-card">
        <img className="fruit-card__image" src={fruit.image} alt={fruit.name} />
        <h2 className="fruit-card__name">{fruit.name}</h2>
        <p className="fruit-card__benefits">{fruit.benefits}</p>
        <p className="fruit-card__price">Price: ${fruit.price}</p>
        {/* Add other fruit details as needed */}
      </div>
    </div>
  );
};

export default FruitDetails;
