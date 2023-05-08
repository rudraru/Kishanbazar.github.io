import React, { useState } from 'react';
import FruitCard from './FruitCard';
import Cart from './Cart';

const FruitList = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (fruit) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === fruit.id);
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...fruit, quantity: 1 }]);
    }
  };

  return (
    <div className="fruit-list">
      <div className="fruit-cards">
        {FruitCard.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart items={cartItems} />
    </div>
  );
};

export default FruitList;
