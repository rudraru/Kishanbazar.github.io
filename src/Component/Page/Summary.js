import React, { useState, useEffect } from 'react'
import {useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "./Summary.css";

const SummaryPage = () => {
const [myOrderId, setMyOrderId] = useState(null);
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
    const items = cartItemsWithDetails.map(item => {
      return {
        item_name: item.name,
        item_price: item.price,
        quantity: item.quantity,
      };
    });
  
    const orderData = {
      name: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: '',
      items,
    };
  
    try {
      const response = await axios.post('/orders', orderData);
      console.log(response.data);
  
      // Clear the cart items from the local storage
      localStorage.removeItem('cartItems');
  
      // Set the order confirmation state to true
      setOrderConfirmed(true);
  
      // Redirect to homepage after 2 seconds
      setTimeout(() => {
        history.push('/');
      }, 2000);
    } catch (error) {
      console.log(error);
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

        <button onClick={() => handleConfirmOrder(myOrderId)}>Confirm Order</button>
{orderConfirmed && <p style={{ color: 'red' }}>Order confirmed! Redirecting to homepage...</p>}


        <button onClick={handleConfirmOrder}>Confirm Order</button>
        {orderConfirmed && <p style={{ color: 'red' }}>Order confirmed! Redirecting to homepage...</p>}

      </div>
    </div>
  );
};

    
    export default SummaryPage;