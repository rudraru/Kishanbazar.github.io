import React from 'react';

const FruitDetails = ({ match, fruits }) => {
  const fruit = fruits.find((item) => item.id === parseInt(match.params.id));

  if (!fruit) {
    return <div>Sorry, that fruit was not found.</div>;
  }

  return (
    <div className="fruit-details">
      <h1>{fruit.name}</h1>
      <img src={`images/${fruit.image}`} alt={fruit.name} />
      <p>{fruit.description}</p>
      <p>{`Price: $${fruit.price}`}</p>
    </div>
  );
};

export default FruitDetails;
