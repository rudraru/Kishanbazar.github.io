// import React from "react";


// const CartTodo = ({ cartItems }) => {
//   return (
//     <div className="cart-todo">
//       <h2>CartTodo</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             {item.name} ({item.quantity} kg)
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CartTodo;

import React from "react";

const CartTodo = ({ clickedCount, cartItems }) => {
  return (



    <div className="cart-todo">

<h2>CartTodo</h2>
      <ul>
        {cartItems.map((item) => (
           <li key={item.id}>
             {item.name} ({item.quantity} kg)
          </li>
         ))}
/       </ul>



      <p>Clicked count: {clickedCount}</p>
    </div>
  );
};

export default CartTodo;


