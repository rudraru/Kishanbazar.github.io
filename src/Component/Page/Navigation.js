import React, { useState, useRef, useEffect } from 'react';
import { FaInfoCircle, FaBlog,FaUser,FaQuestionCircle, FaFileContract, FaTruck, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Fruits from '../Page/Card';
import './Navigation.css';

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const searchRef = useRef(null);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchTerm('');
    }
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
    <nav className="navbar" onClick={handleClickOutside}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <div className="logo">
              <img
                src="https://th.bing.com/th/id/OIP.WI5YYcU5WGWcFp36Xe8sPAHaEX?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Fruit Mart"
                className="logo-image"
              />
              <div className="logo-text"></div>
            </div>
          </Link>
        </div>
        <Link to="/aboutus/us" className="nav-link">
                  <FaInfoCircle className="nav-icon" />
                  About Us
                  </Link>
                  {/* <Link to="/contactus" className="nav-link">
                  <FaPhoneSquareAlt className="nav-icon" />
                  Contact Us
                  </Link> */}
                  <a href="https://blog.fruitmart.com" className="nav-link">
                  <FaBlog className="nav-icon" />
                  Blog
                  </a>
                  <div className="nav-link">
        
          <FaUser className="nav-icon" />
           Customer_service
      <ul className="customer-service-help-submenu">
        <li><Link to="#"><FaQuestionCircle /> FAQs</Link></li>
        <li><Link to="/Trmsandcdn"><FaFileContract /> Terms and Conditions</Link></li>
        <li><Link to="#"><FaTruck /> Delivery Policy / Information</Link></li>
        <li><Link to="/Contactus"><FaPhone /> Contact Us</Link></li>
      </ul>
        </div>
 
        <div className="nav-links">
          <div className="search-container" ref={searchRef}>
            <input
              type="text"
              placeholder="Serach Fruits"
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm.length > 0 && (
              <button className="clear-button" onClick={handleClear}>
                X
              </button>
            )}
            {/* <FaSearch
              className="search-icon"
              onClick={() => history(`/search/${searchTerm}`)}
            /> */}
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

                 
                  </div>
                  </div>
                  </nav>
                  );
                  };
                  
                  export default Navigation;