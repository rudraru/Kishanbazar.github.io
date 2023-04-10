

import React, { useState } from "react";
import './Cart.css'
// const fruits = [
//   {
//     id: 1,
//     name: "Apple",
//     price: 50,
//     image: "https://via.placeholder.com/160",
//   },
//   {
//     id: 2,
//     name: "Banana",
//     price: 20,
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 3,
//     name: "Orange",
//     price: 30,
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 4,
//     name: "Mango",
//     price: 100,
//     image: "https://via.placeholder.com/150",
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },

//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
//   {
//     id: 5,
//     name: "Pineapple",
//     price: 80,
//     image: "https://via.placeholder.com/150",
    
//   },
  
// ];

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

// const CartItem = ({ item, handleRemoveFromCart }) => {
//   return (
//     <tr>
//       <td>{item.name}</td>
//       <td>{item.price}</td>
//       <td>{item.quantity}</td>
//       <td>
//         <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
//       </td>
//     </tr>
//   );
// };

// const Cart = ({ cartItems, handleRemoveFromCart }) => {
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   const shippingCharge = totalPrice < 1000 ? 150 : 0;

//   return (
//     <div className="cart">
//       <h2>Cart</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Quantity</th>
            
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <CartItem key={item.id} item={item} handleRemoveFromCart={handleRemoveFromCart} />
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td colSpan="4">Total Price: Rs {totalPrice}</td>
//           </tr>
//           <tr>
//             <td colSpan="4">
//               Shipping Charge: Rs {shippingCharge} ({totalPrice < 1000 ?"150" : "0"})
      
      
      
      
      
//               </td>
// </tr>
// <tr>
// <td colSpan="4">Grand Total: Rs {Number(totalPrice) + Number(shippingCharge)}</td>
// </tr>
// </tfoot>
// </table>
// </div>
// );
// };





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

// const handleRemoveFromCart = (item) => {
// const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
// setCartItems(updatedCartItems);
// };

return (
<div className="app">
<Products handleAddToCart={handleAddToCart} />
{/* <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} /> */}
</div>
);
};

export default Cart;



