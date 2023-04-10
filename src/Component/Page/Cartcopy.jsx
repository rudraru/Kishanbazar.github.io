import React, { useState } from "react";

import fruits from "./Card";

import Product from "./Product";

const Cart = ({ handleAddToCart }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCartInternal = (product, quantity) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <div className="products">
        {fruits.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCartInternal}
          />
        ))}
      </div>
      <button onClick={() => handleAddToCart(cartItems)}>Add to CartTodo</button>
    </div>
  );
};

export default Cart;
