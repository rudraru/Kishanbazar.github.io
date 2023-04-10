
import React, { useState } from "react";
import './Cart.css'


import fruits from "./Card";

const Product = ({ product, handleAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Price: Rs {product.price}</p>
      <div>
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{quantity} kg</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <button onClick={() => handleAddToCart(product, quantity)}>Add to cart</button>
    </div>
  );
};

const Products = ({ handleAddToCart }) => {
  return (
    <div className="products">
      {fruits.map((product) => (
        <Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};





const Cart = () => {
const [cartItems, setCartItems] = useState([]);

const handleAddToCart = (product, quantity) => {
const existingCartItemIndex = cartItems.findIndex((item) => item.id === product.id);

if (existingCartItemIndex !== -1) {
  const updatedCartItems = [...cartItems];
  updatedCartItems[existingCartItemIndex].quantity += quantity;
  setCartItems(updatedCartItems);
} else {
  setCartItems([...cartItems, { ...product, quantity }]);
}
};


return (
<div className="app">
<Products handleAddToCart={handleAddToCart} />

</div>
);
};

export default Cart;

