import React, { useState } from 'react';
import FruitCard from './Page/Fruits';

import Cart from './Page/Cart'


const FruitList = () => {
  const [cartItems, setCartItems] = useState([]);

  const fruits = [
    // {
    //   id: 1,
    //   name: 'Apple',
    //   photo: 'https://source.unsplash.com/400x400/?apple',
    //   price: 1.99
    // },
    // {
    //   id: 2,
    //   name: 'Banana',
    //   photo: 'https://source.unsplash.com/400x400/?banana',
    //   price: 0.99
    // },
    // // {
    // //   id: 3,
    // //   name: 'Orange',
    // //   photo: 'https://source.unsplash.com/400x400/?orange',
    // //   price: 2.49
    // // },
    // // {
    // //   id: 4,
    // //   name: 'Grapes',
    // //   photo: 'https://source.unsplash.com/400x400/?grapes',
    // //   price: 3.99
    // // },
    // // {
    // //   id: 5,
    // //   name: 'Pineapple',
    // //   photo: 'https://source.unsplash.com/400x400/?pineapple',
    // //   price: 4.99
    // // },
    // // {
    // //   id: 6,
    // //   name: 'Mango',
    // //   photo: 'https://source.unsplash.com/400x400/?mango',
    // //   price: 2.99
    // // },
    // {
    //   id: 7,
    //   name: 'Watermelon',
    //   photo: 'https://source.unsplash.com/400x400/?watermelon',
    //   price: 5.99
    // },
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

