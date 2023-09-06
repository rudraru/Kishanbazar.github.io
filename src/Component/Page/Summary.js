import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import './Summary.css';
import { Link } from 'react-router-dom';
const SummaryPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }

    const storedCustomerName = localStorage.getItem('customerName');
    if (storedCustomerName) {
      setCustomerName(storedCustomerName);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  function calculateTotalAmount(cartItems) {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  const orderAmount = calculateTotalAmount(cartItems);
  const shippingCharge = orderAmount < 1500 ? 150 : 0;
  const totalAmount = orderAmount + shippingCharge;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!paymentMethod || cartItems.length === 0) {
      window.alert('Please select a payment method and add products to the bill.');
      return;
    }

 

    // Create the invoice object
    const invoice = {
      customerName,
      cartItems,
      paymentMethod,
      orderAmount,
      shippingCharge,
      totalAmount,
    };

    // Print the invoice
    printInvoice(invoice);

    // Set the order confirmation state to true
    setOrderConfirmed(true);

    // Clear the cart items
    setCartItems([]);
  };

  useEffect(() => {
    if (orderConfirmed) {
      // Redirect to the homepage after 2 seconds
      const redirectTimeout = setTimeout(() => {
        window.location.href = '/';
      }, 2000);

      // Cleanup the timeout on component unmount
      return () => clearTimeout(redirectTimeout);
    }
  }, [orderConfirmed]);

  const printInvoice = (invoice) => {
    const printWindow = window.open('', '', 'width=600,height=600');
    printWindow.document.write('<html><head><title>Invoice</title>');
    printWindow.document.write(
      '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">'
    );
    printWindow.document.write('</head><body>');
    printWindow.document.write('<div class="container">');
    printWindow.document.write('<div class="text-center mt-3">');
    printWindow.document.write('<h1>Kishan ko Bazar</h1>');
    printWindow.document.write('</div>');
    printWindow.document.write('<h4>Customer Details:</h4>');

    printWindow.document.write(`<p>Customer: ${invoice.customerName}</p>`);
    printWindow.document.write(`<p>Address: ${invoice.address}</p>`);
    printWindow.document.write(`<p>Email: ${invoice.email}</p>`);
    printWindow.document.write(`<p>Contact Number: ${invoice.contactNumber}</p>`);
    printWindow.document.write(`<p>Payment Method: ${invoice.paymentMethod}</p>`);
    // Include form details in the invoice
 
   
    printWindow.document.write('<h3 class="mt-4">Invoice Details:</h3>'); 
    printWindow.document.write('<table class="table table-bordered invoice-items">');
    printWindow.document.write('<thead>');
    printWindow.document.write('<tr>');
    printWindow.document.write('<th>S.N</th>');
    printWindow.document.write('<th>Product Name</th>');
    printWindow.document.write('<th>Price</th>');
    printWindow.document.write('<th>Quantity</th>');
    printWindow.document.write('<th>Unit</th>');
    printWindow.document.write('<th>Total</th>');
    printWindow.document.write('</tr>');
    printWindow.document.write('</thead>');
    printWindow.document.write('<tbody>');
    invoice.cartItems.forEach((item, index) => {
      printWindow.document.write('<tr>');
      printWindow.document.write(`<td>${index + 1}</td>`);
      printWindow.document.write(`<td>${item.name}</td>`);
      printWindow.document.write(`<td>${item.price}</td>`);
      printWindow.document.write(`<td>${item.quantity}</td>`);
      printWindow.document.write(`<td>${item.unit}</td>`);
      printWindow.document.write(`<td>${item.price * item.quantity}</td>`);
      printWindow.document.write('</tr>');
    });
    printWindow.document.write('</tbody>');
    printWindow.document.write('</table>');
    printWindow.document.write(`<p>Amount: ${invoice.orderAmount}</p>`);
    printWindow.document.write(`<p>Shipping Charge: ${invoice.shippingCharge}</p>`);
    printWindow.document.write(`<p>Total Amount: ${invoice.totalAmount}</p>`);
    printWindow.document.write('<p class="text-center mt-4">Thank you for your purchase!</p>');
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };
  

  return (
<div>
    <Link className='Backclass' to='/'>
       Home   /
    </Link>
    <Link className='Backclass' to='/fruits'>
    fruits /
    </Link>

    <Link className='Backclass' to='/order-summary'>
  Summary
    </Link>
    <div className="summary-page">
      <div className="invoice-section">
        <div className="invoice-container">
          <div className="invoice-row">
          
          </div>
          <table className="table invoice-items">
            <thead>
              <tr>
                <th>S.N</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Unit</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.unit}</td>
                  <td>{item.price * item.quantity}</td>
                  <td className="remove-icon" onClick={() => handleRemoveItem(item.id)}>
                    <FaTrash />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p>Amount: {orderAmount}</p>
          <p>Shipping Charge: {shippingCharge}</p>
          <p>Total Amount: {totalAmount}</p>

          <div className="invoice-footer">
            <p className="invoice-message">Thank you for your purchase!</p>
            {/* <button
              className="btn btn-primary"
              onClick={handleSubmit}
              disabled={!paymentMethod || cartItems.length === 0 || orderConfirmed}
            >
              Confirm Order
            </button> */}
          </div>
        </div>
      </div>

      <div className="invoice-details">
        {orderConfirmed && (
          <div className="confirmation-overlay">
            <div className="confirmation-message">
              <p className="confirmation-text">Order confirmed! Redirecting to homepage...</p>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
        <label className="invoice-label">Customer Name:</label>
            <input
              className="invoice-input"
              type="text"
              value={customerName}
              placeholder="Enter Your Name..."
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />

          <label>
            Address:
            <input
              type="text"
              value={address}
              placeholder="Enter Your Address..."
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              placeholder="something@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Contact Number:
            <input
              type="number"
              value={contactNumber}
              placeholder="+977 98********"
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </label>

          <label>
            Payment Method:
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="">Select Payment Method</option>
              <option value="credit">Credit Card</option>
              <option value="debit">Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default SummaryPage;
