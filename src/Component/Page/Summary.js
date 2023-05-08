// // import React from "react";
// // import "./Summary.css";










// // const Summary = ({ cartItems, handleCancel, handleConfirm }) => {
// //   let subtotal = 0;
// //   let tax = 0;
// //   let total = 0;

// //   if (cartItems && cartItems.length > 0) {
// //     subtotal = cartItems.reduce(
// //       (acc, item) => acc + item.quantity * item.price,
// //       0
// //     );
// //     tax = Math.round(subtotal * 0.1);
// //     total = subtotal + tax;
// //   }

// //   return (
// //     <div className="summary">
// //       <h2>Order Summary</h2>
// //       <table>
// //         <thead>
// //           <tr>
// //             <th>Product Name</th>
// //             <th>Order QTY</th>
// //             <th>Unit</th>
// //             <th>Price</th>
// //             <th>Total</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {cartItems &&
// //             cartItems.map((item) => (
// //               <tr key={item.id}>
// //                 <td>{item.name}</td>
// //                 <td>{item.quantity} kg</td>
// //                 <td>{item.unit}</td>
// //                 <td>Rs {item.price}</td>
// //                 <td>Rs {item.quantity * item.price}</td>
// //               </tr>
// //             ))}
// //         </tbody>
// //         <tfoot>
// //           <tr>
// //             <td colSpan="4">Subtotal</td>
// //             <td>Rs {subtotal}</td>
// //           </tr>
// //           <tr>
// //             <td colSpan="4">Tax</td>
// //             <td>Rs {tax}</td>
// //           </tr>
// //           <tr>
// //             <td colSpan="4">Total</td>
// //             <td>Rs {total}</td>
// //           </tr>
// //         </tfoot>
// //       </table>
// //       <div className="buttons">
// //         <button onClick={handleCancel}>Cancel Order</button>
// //         <button onClick={handleConfirm}>Confirm Order</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Summary;








// import React, { useState } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import axios from "axios";

// const Summary = () => {
//   const { customerName } = useParams();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const cartItems = searchParams.get("cartItems")
//     ? JSON.parse(searchParams.get("cartItems"))
//     : [];

//   const [orderConfirmed, setOrderConfirmed] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");

//   const handleConfirmOrder = async () => {
//     const orderData = {
//       name,
//       email,
//       phone,
//       address,
//       paymentMethod,
//       cartItems,
//     };

//     try {
//       await axios.post("/orders", orderData);
//       setOrderConfirmed(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDeclineOrder = () => {
//     setName("");
//     setEmail("");
//     setPhone("");
//     setAddress("");
//     setPaymentMethod("");
//   };

//   if (cartItems.length === 0) {
//     return <div>No items in cart</div>;
//   }

//   return (
//     <div>
//       <h1>Order Summary</h1>
//       <p>Customer Name: {customerName}</p>
//       <table>
//         <thead>
//           <tr>
//             <th>Item</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>Rs {item.price}</td>
//               <td>{item.quantity} kg</td>
//               <td>Rs {item.price * item.quantity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <p>
//         Total: Rs{" "}
//         {cartItems.reduce(
//           (total, item) => total + item.price * item.quantity,
//           0
//         )}
//       </p>
//       {!orderConfirmed && (
//         <div>
//           <form>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <label htmlFor="email">Email:</label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <label htmlFor="phone">Phone:</label>
//             <input
//               type="tel"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <label htmlFor="address">Address:</label>
//             <textarea
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             ></textarea>
//             <label htmlFor="paymentMethod">Payment Method:</label>
// <select
//   id="paymentMethod"
//   value={paymentMethod}
//   onChange={(e) => setPaymentMethod(e.target.value)}
// >
//   <option value="">--Select Payment Method--</option>
//   <option value="cash">Cash</option>
//   <option value="card">Card</option>
// </select>
// <button type="button" onClick={handleConfirmOrder}>
//   Confirm Order
// </button>
// <button type="button" onClick={handleDeclineOrder}>
//   Decline Order
// </button>
//     </form>
//   )}
//   {orderConfirmed && (
//     <div>
//       <p>Your order has been confirmed!</p>
//       <p>Thank you for shopping with us.</p>
//     </div>
//   )}
// </div>
//   )
  
// </div>
  
// }

// export default Summary;




import React, { useState, useEffect } from 'react';

import {useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./Summary.css";

import { createOrder } from '../api/CrateOrder';



const SummaryPage = () => {
  const [cartItemsWithDetails, setCartItemsWithDetails] = useState([]);
  const { customerName } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cartItems = searchParams.get("cartItems") ? JSON.parse(searchParams.get("cartItems")) : [];
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const history = useNavigate();
  useEffect(() => {
    const fetchCartItemsData = async () => {
      try {
        const itemsWithDetails = await Promise.all(cartItems.map(async (item) => {
          const { data } = await axios.get(`/products/${item.id}`);
          return {
            ...item,
            name: data.name,
            price: data.price,
          };
        }));
        setCartItemsWithDetails(itemsWithDetails);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCartItemsData();
  }, [cartItems]);

  const handleConfirmOrder = async () => {
    const orderData = {
      name,
      email,
      phone,
      address,
      paymentMethod,
      items: cartItemsWithDetails,
    };
    try {
      await createOrder(orderData);
      setOrderConfirmed(true);
      setTimeout(() => {
        history('/');
      }, 2000); // redirect to homepage after 2 seconds
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="summary-page">
      <h1>Summary Page</h1>
      <h2>Customer: {customerName}</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} - {item.quantity}
          </li>
        ))}
      </ul>
      <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
          <option value="">Select Payment Method</option>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="paypal">Cash on delivery</option>
          <option value="paypal">Fonepay</option>
          <option value="paypal">Esewa</option>
        </select>
        <button onClick={handleConfirmOrder}>Confirm Order</button>
        {orderConfirmed && <p style={{ color: 'red' }}>Order confirmed! Redirecting to homepage...</p>}
       
      </div>
    </div>
  );
};

    
    export default SummaryPage;
