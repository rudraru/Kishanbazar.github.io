import React, { useState } from 'react';
import FruitCard from './Page/Fruits';

import Cart from './Page/Cart'


const FruitList = () => {
  const [cartItems, setCartItems] = useState([]);

  const fruits = [

  ];
  
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
        {fruits.map((fruit) => (
          <FruitCard key={fruit.id} fruit={fruit} handleAddToCart={handleAddToCart} />
        ))}
      </div>
      <Cart items={cartItems} />
    </div>
  );
};

export default FruitList;

