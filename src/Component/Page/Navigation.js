
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Fruits from '../Page/Card';

import './Navigation.css';
import { FaFacebook, FaTwitter, FaInstagram, FaShoppingCart } from 'react-icons/fa';
const Navigation = () => {
  const [cartCount, setCartCount] = useState(0);
  const [location, setLocation] = useState('Machhapokhari, Tokha');


  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };


  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const searchRef = useRef(null);

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
          <img
            src={fruit.image}
            alt={fruit.name}
            className="search-image"
          />
          <div className="search-details">
            <div className="search-name">{fruit.name}</div>
            <div className="search-price">
              Rs. {fruit.price}
            </div>
          </div>
        </div>
      </Link>
    ));
  };






  return (
    <div className="app">
      <nav>
        <div className="nav-container">
          <div className="social-media">
            <div className="icon">
              <Link to="https://www.facebook.com">
                <FaFacebook />
              </Link>
            </div>
            <div className="icon">
              <Link to="https://www.twitter.com">
                <FaTwitter />
              </Link>
            </div>
            <div className="icon">
              <Link to="https://www.instagram.com">
                <FaInstagram />
              </Link>
            </div>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="#">Offer</Link>
            </li>
            <li>
              <Link to="#">Wishlist</Link>
            </li>
            <li>
              <Link to="#">Login/Signup</Link>
            </li>
          </ul>
        </div>
      </nav>



      <section>
      <select value={location} onChange={handleLocationChange}>
        <option>Machhapokhari, Tokha</option>
      </select>

        
      <section className='serachbox'>
      <input className='searchboxfilter'
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
                  <div className="search-details">
                    Show More
                  </div>
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
      <div className="my-cart">My Cart - Nrs.{cartCount}</div>
  
    </section>

 
     
    


      
</section>
    </div>
    
);
};


export default Navigation;



