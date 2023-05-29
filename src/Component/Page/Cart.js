  import React, { useState, useEffect } from "react";

  import "./Cart.css";

  import { FaCartPlus, FaArrowDown, FaArrowUp } from "react-icons/fa";
  import { useNavigate } from "react-router-dom";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  import fruits from "./Card";

  const Product = ({ product, handleAddToCart, handleOrder }) => {
    const [quantity, setQuantity] = useState(1);
    const [arrowUp, setArrowUp] = useState(false);

    const handleIncreaseQuantity = () => {
      setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    };

    const handleArrowClick = () => {
      setArrowUp(!arrowUp);
    };

    const handleAddToCartClick = () => {
      handleAddToCart(product, quantity);

      const totalPrice = product.price * quantity;

      toast.success(
        `${product.name} (Quantity: ${quantity}) added to cart successfully! Total Amount: Rs ${totalPrice}`,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 4000,
          hideProgressBar: true,
        }
      );
    };

    return (
      <div className="product">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className="product-price">Price: Rs {product.price}</p>
        <div className="quantity">
          <button className="quantity-btn-small" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span className="quantity-value">{quantity} {product.unit}</span>
          <button className="quantity-btn-small" onClick={handleIncreaseQuantity}>
            +
          </button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCartClick}>
          <FaCartPlus />
          Add to Cart
        </button>
        {/* <button className="place-order-btn" onClick={handleOrder}>
          Place Order
        </button> */}
        <button className="arrow-btn" onClick={handleArrowClick}>
          {arrowUp ? <FaArrowUp /> : <FaArrowDown />}
        </button>
        {arrowUp && (
          <button className="order-now-btn" onClick={handleOrder}>
          My Cart
          </button>
        )}
      </div>
    );
  };



  const Products = ({ handleAddToCart, handleOrder }) => {
    return (
      <div className="products">
        {fruits.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            handleOrder={handleOrder}
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
      // Remove the cart items from local storage
      localStorage.removeItem("cartItems");
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

    const handleOrder = () => {
      const cartItemsQueryParam = encodeURIComponent(
        JSON.stringify(cartItems)
      );
      navigate(`/order-summary?cartItems=${cartItemsQueryParam}`);
    };

    return (
      <div className="cart-container">
        <div className="top-message">
          <p>
          Click the down arrow to go the Ordered Cart page. Thank you.
        </p>
        </div>
        <Products handleAddToCart={handleAddToCart} handleOrder={handleOrder} />

        <ToastContainer />
      </div>
    );
  };

  export default Cart;
