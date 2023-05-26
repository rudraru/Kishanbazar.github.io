import React, { useState, useEffect } from "react";
import "./Cart.css";
import { FaCartPlus, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
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
      <div className="quantity">
        <button onClick={handleDecreaseQuantity}>-</button>
        <span>{quantity} kg</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <button onClick={() => handleAddToCart(product, quantity)}>
        <FaCartPlus />
        Add cart
      </button>
    </div>
  );
};

const Products = ({ handleAddToCart }) => {
  return (
    <div className="products">
      {fruits.map((product) => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );


  const user = localStorage.getItem('user');
  if (!user) {
    // Redirect to the login page if the user is not logged in
    window.location.href = '/SignIn';
  }

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
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

  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };
  const handleOrder = () => {
    const cartItemsQueryParam = encodeURIComponent(
      JSON.stringify(cartItems)
    );
    navigate(`/order-summary?cartItems=${cartItemsQueryParam}`);
  };

  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-invoice">
    <div className="products-container">
        <Products handleAddToCart={handleAddToCart} />
      </div>
      <div className="cart-container">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <table className="cart-items">
             <thead>
        <tr>
          <th colSpan="2">Product Name</th>
          <th>QTY</th>
          <th>Unit</th>
          <th>Prices</th>
          <th>Total</th>
          <th></th>
        </tr>
      </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={item.id} className="cart-item">
                    <td>{index + 1}</td>
                    <td>
                      <div className="cart-item-image">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                      </div>
                    </td>
                    <td>{item.quantity} kg</td>
                    <td>Rs {item.price}</td>
                    <td>Rs {item.quantity * item.price}</td>
                    <td>
                      Rs {item.quantity * item.price}
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="remove-button"
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5">Total Amount:</td>
                  <td>Rs {total}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          )}
          <div className="cart-footer">
            {total !== 0 && (
              <>
                <p>Thank you for your purchase!</p>
                <button onClick={handleOrder}>Place Order</button>
              </>
            )}
          </div>
         
       
        </div>
      </div>
  
  )
}
export default Cart;