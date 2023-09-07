import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaShoppingCart } from 'react-icons/fa';
import './Navigation.css';
import Fruits from '../Page/Card';

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [location, setLocation] = useState('Machhapokhari, Tokha');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [cartItemsState, setCartItemsState] = useState([]);

  const searchRef = useRef(null);

  const toggleMenu = () => {
    setShowMenu(prevShowMenu => !prevShowMenu);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    const results = Fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setShowMore(false);
  }, [searchTerm]);

  const handleShowMore = () => {
    setShowMore(true);
  };

  const renderSearchResults = () => {
    const MAX_RESULTS = 7;
    let results = searchResults.slice(0, MAX_RESULTS);
    if (showMore) {
      results = searchResults;
    }

    return results.map((fruit) => (
      <Link to={`/fruits/${fruit.id}`} key={fruit.id}>
        <div className="search-item">
          <img src={fruit.image} alt={fruit.name} className="search-image" />
          <div className="search-details">
            <div className="search-name">{fruit.name}</div>
            <div className="search-price">Rs. {fruit.price}</div>
          </div>
        </div>
      </Link>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Fetch updated cart items from localStorage
      const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setCartItemsState(updatedCartItems);

      // Calculate cart count and total amount
      let totalCount = 0;
      let totalNRP = 0;

      updatedCartItems.forEach((item) => {
        totalCount += item.quantity;
        totalNRP += item.quantity * item.price;
      });

      setCartCount(totalCount);
      setTotalAmount(totalNRP);
    }, 100); // Refresh every 0.1 second

    return () => {
      clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, []);

  const isSticky = true; // You need to define isSticky according to your logic

  return (
    <div>
      <nav>
        <div className="nav-container">
          <div className="social-media">
            <div className="icon">
              <a href="https://www.facebook.com">
                <FaFacebook />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.twitter.com">
                <FaTwitter />
              </a>
            </div>
            <div className="icon">
              <a href="https://www.instagram.com">
                <FaInstagram />
              </a>
            </div>
          </div>

          <ul className={`nav-links ${showMenu ? 'show-menu' : ''}`}>
            <li>
              <Link to="/Offer">Offer</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="#">Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className={`Navigation ${isSticky ? 'sticky' : ''}`}>
        <select className='location' value={location} onChange={handleLocationChange}>
          <option>Machhapokhari, Tokha</option>
        </select>

        <section className="searchbox">
          <input
            className="searchboxfilter"
            type="text"
            placeholder="Search Fruits"
            value={searchTerm}
            onChange={handleSearch}
          />

          <div className="search-container" ref={searchRef}>
            {searchTerm.length > 0 && (
              <button className="clear-button" onClick={handleClear}>
                X
              </button>
            )}

            {searchTerm.length > 1 && (
              <div className="search-results">
                {renderSearchResults()}
                {!showMore && searchResults.length > 4 && (
                  <div className="search-item" onClick={handleShowMore}>
                    <div className="search-details">Show More</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="cart">
          <div className="cart-container">
            <FaShoppingCart className="cart-icon" />
            <span className="cart-count">{cartCount}</span>
          </div>
          Item - Nrs.{totalAmount}
        </section>
      </section>
    </div>
  );
}

export default Navigation;
