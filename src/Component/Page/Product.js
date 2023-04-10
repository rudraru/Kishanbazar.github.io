// import React, { useState } from "react";

// const Product = ({ product, handleAddToCart }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleIncreaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const handleDecreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className="product">
//       <img src={product.image} alt={product.name} />
//       <h3>{product.name}</h3>
//       <p>Price: Rs {product.price}</p>
//       <div>
//         <button onClick={handleDecreaseQuantity}>-</button>
//         <span>{quantity} kg</span>
//         <button onClick={handleIncreaseQuantity}>+</button>
//       </div>
//       <button onClick={() => handleAddToCart(product, quantity)}>Add to cart</button>
//     </div>
//   );
// };

// export default Product;
