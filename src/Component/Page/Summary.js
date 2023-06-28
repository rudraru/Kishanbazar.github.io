import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Summary.css';

const SummaryPage = (fruits) => {
  const [myOrderId, setMyOrderId] = useState(null);
  const [cartItemsWithDetails, setCartItemsWithDetails] = useState([]);
  const { customerName } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const cartItems = searchParams.get('cartItems') ? JSON.parse(searchParams.get('cartItems')) : [];
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();

  const fetchCartItemsData = async () => {
    try {
      const itemsWithDetails = await Promise.all(
        cartItems.map(async (item) => {
          const { data } = await axios.get(`/products/${item.id}`);
          return {
            ...item,
            name: data.name,
            price: data.price,
          };
        })
      );
      setCartItemsWithDetails(itemsWithDetails);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(fetchCartItemsData, 500); // Fetch data every 0.5 seconds

    return () => {
      clearInterval(interval); // Cleanup the interval when the component unmounts
    };
  }, []);
  
  const handleConfirmOrder = async () => {
    const items = cartItemsWithDetails.map((item) => ({
      item_name: item.name,
      item_price: item.price,
      quantity: item.quantity,
    }));

    const orderData = {
     
      paymentMethod,
      items,
    };

    try {
      const response = await axios.post('/orders', orderData);
      console.log(response.data);

      // Clear the cart items from local storage
      localStorage.removeItem('cartItems');

      // Set the order confirmation state to true
      setOrderConfirmed(true);

      // Redirect to homepage after 2 seconds
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  function calculateTotalAmount(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
  const orderAmount = calculateTotalAmount(cartItems);
const shippingCharge = orderAmount < 1500 ? 150 : 0;
const totalAmount = orderAmount + shippingCharge;

const handleRemoveItem = (itemId) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
  const updatedCartItemsWithDetails = cartItemsWithDetails.filter((item) => item.id !== itemId);

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  setCartItemsWithDetails(updatedCartItemsWithDetails);
};



  return (
    <div className="summary-page">
     <div className="invoice-header">
  <img src="https://tse4.mm.bing.net/th?id=OIP.owJztdFqBCzweYjwQmsZUgHaFO&pid=Api&P=0&h=180" alt="Logo" className="invoice-logo" />
  <div className="invoice-company">
    <h2>Kishan ko Bazar</h2>
    <p>Machhapokhari,Tokha</p>
  </div>
  
</div>


      <div className="invoice-section">
      <h2 className="invoice-bill">Estimate Bill</h2>
  <h2 className="invoice-customer">Customer: {customerName}</h2>
  <ul className="invoice-items">
    <li className="invoice-header">
      <span className="invoice-label">S.N</span>
      <span className="invoice-label">Product Name</span>
      <span className="invoice-label">Price</span>
      <span className="invoice-label">Quantity</span>
      <span className="invoice-label">Unit</span>
      
    </li>
    {cartItems.map((item, index) => (
      <li key={item.id}>
        <span>{index + 1}</span>
        <span>{item.name}</span>
        <span>{item.price}</span>
        <span>{item.quantity}</span>
        <span>{item.unit}</span>
        <span className="remove-icon" onClick={() => handleRemoveItem(item.id)}>
      <FaTrash />
    </span>
      </li>
    ))}
  </ul>

<p> Amount: {totalAmount}</p>
  <div className="invoice-footer">
  
    <p className="invoice-message">Thank you for your purchase!</p>
  </div>

      </div>
      <div className="invoice-details">
          
          <div className="invoice-payment">
  <h3>Select Payment Method:</h3>
  <div className="payment-methods">
    <label className="payment-method">
      <input
        type="checkbox"
        value="credit_card"
        checked={paymentMethod.includes("credit_card")}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      Credit Card
    </label>
    <label className="payment-method">
      <input
        type="checkbox"
        value="paypal"
        checked={paymentMethod.includes("paypal")}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      PayPal
    </label>
    <label className="payment-method">
      <input
        type="checkbox"
        value="cash_on_delivery"
        checked={paymentMethod.includes("cash_on_delivery")}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      Cash on Delivery
    </label>
    <label className="payment-method">
      <input
        type="checkbox"
        value="fonepay"
        checked={paymentMethod.includes("fonepay")}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      Fonepay
    </label>
    <label className="payment-method">
      <input
        type="checkbox"
        value="esewa"
        checked={paymentMethod.includes("esewa")}
        onChange={(e) => setPaymentMethod(e.target.value)}
      />
      Esewa
    </label>
  </div>
</div>



          <button onClick={handleConfirmOrder} disabled={orderConfirmed}>
            Confirm Order
          </button>
          {orderConfirmed && (
            <p style={{ color: 'red' }}>Order confirmed! Redirecting to homepage...</p>
          )}
        </div>
    </div>
  );
};

export default SummaryPage;
