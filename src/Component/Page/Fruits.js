// import React, { useState } from 'react';

// const FruitCard = ({ fruit, handleAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncrement = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddClick = () => {
//     const item = { ...fruit, quantity };
//     handleAddToCart(item);
//   };

//   return (
//     <div className="fruit-card">
//       <img src={fruit.image} alt={fruit.name} />
//       <h3>{fruit.name}</h3>
//       <div className="price">Rs.{fruit.price.toFixed(2)}</div>
//       <div className="quantity">
//         <button onClick={handleDecrement}>-</button>
//         <span>{quantity}</span>
//         <button onClick={handleIncrement}>+</button>
//       </div>
//       <button onClick={handleAddClick}>Add to Cart</button>
//     </div>
//   );
// };

// export default FruitCard;

