// // <<<<<<< HEAD
// // import React, { useState, useRef, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import Fruits from '../Page/Card';
// // import { FaFacebook, FaTwitter, FaInstagram, FaShoppingCart, FaBars } from 'react-icons/fa';
// // import './Navigation.css';

// // function Navigation() {
// //   const [location, setLocation] = useState('Machhapokhari, Tokha');
// //   const [isSticky, setIsSticky] = useState(false);


// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const stickyOffset = document.querySelector('.Navigation').offsetTop;
// //       setIsSticky(window.pageYOffset > stickyOffset);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => {
// //       window.removeEventListener('scroll', handleScroll);
// //     };
// //   }, []);

// //   const [cartItemsState, setCartItemsState] = useState(
// //     JSON.parse(localStorage.getItem('cartItems')) || []
// //   );
// //   const [cartCount, setCartCount] = useState(0);
// //   const [totalAmount, setTotalAmount] = useState(0);


// //   useEffect(() => {
// //     const uniqueProductIds = new Set(cartItemsState.map((item) => item.id));
// //     const totalCount = uniqueProductIds.size;
// //     const totalNRP = cartItemsState.reduce(
// //       (total, item) => total + item.price * item.quantity,
// //       0



// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navigation.css';

// class Navigation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showMenu: false
//     };
//   }

//   toggleMenu = () => {
//     this.setState(prevState => ({ showMenu: !prevState.showMenu }));
//   }

//   render() {
//     return (
//       <nav className="nav">
//         <div className="toggle-button" onClick={this.toggleMenu}>
//           <div className={this.state.showMenu ? "toggle-line active" : "toggle-line"}></div>
//           <div className={this.state.showMenu ? "toggle-line active" : "toggle-line"}></div>
//           <div className={this.state.showMenu ? "toggle-line active" : "toggle-line"}></div>
//         </div>
//         <ul className={this.state.showMenu ? "nav-items show-menu" : "nav-items"}>
//           <li className="nav-item"><Link to="/">Home</Link></li>
//           <li className="nav-item"><Link to="/aboutus/us">About Us</Link></li>
//           <li className="nav-item"><Link to="/vegetables">Vegetables</Link></li>
//           <li className="nav-item"><Link to="/fruits">Fruits</Link></li>
//           <li className="nav-item"><Link to="/contactus">Contact Us</Link></li>
//           <li className="nav-item"><Link to="/cart">Cart</Link></li>
//         </ul>
//         <form className="search-box">
//           <input type="text" placeholder="Search..." />
//           <button type="submit">Search</button>
//         </form>
//       </nav>

//     );

//     setCartCount(totalCount);
//     setTotalAmount(totalNRP);

//     localStorage.setItem('cartItems', JSON.stringify(cartItemsState));
//   }, [cartItemsState]);

//   const handleLocationChange = (e) => {
//     setLocation(e.target.value);
//   };

//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showMore, setShowMore] = useState(false);

//   const searchRef = useRef(null);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleClear = () => {
//     setSearchTerm('');
//   };

//   useEffect(() => {
//     const results = Fruits.filter((fruit) =>
//       fruit.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//     setShowMore(false);
//   }, [searchTerm]);

//   const handleShowMore = () => {
//     setShowMore(true);
//   };

//   const renderSearchResults = () => {
//     const MAX_RESULTS = 7;
//     let results = searchResults.slice(0, MAX_RESULTS);
//     if (showMore) {
//       results = searchResults;
//     }

//     return results.map((fruit) => (
//       <Link to={`/fruits/${fruit.id}`} key={fruit.id}>
//         <div className="search-item">
//           <img src={fruit.image} alt={fruit.name} className="search-image" />
//           <div className="search-details">
//             <div className="search-name">{fruit.name}</div>
//             <div className="search-price">Rs. {fruit.price}</div>
//           </div>
//         </div>
//       </Link>
//     ));
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Fetch updated cart items from localStorage
//       const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//       setCartItemsState(updatedCartItems);
//     }, 100); // Refresh every 0.1 second

//     return () => {
//       clearInterval(interval); // Clear the interval when the component unmounts
//     };
//   }, []);

  


//   return (
//     <div>
//     <nav>
//       <div className="nav-container">
       
//           <div className="social-media">
//             <div className="icon">
//               <Link to="https://www.facebook.com">
//                 <FaFacebook />
//               </Link>
//             </div>
//             <div className="icon">
//               <Link to="https://www.twitter.com">
//                 <FaTwitter />
//               </Link>
//             </div>
//             <div className="icon">
//               <Link to="https://www.instagram.com">
//                 <FaInstagram />
//               </Link>
//             </div>
//           </div>

//           <ul className={`nav-links`}>
//             <li>
//               <Link to="/Offer">Offer</Link>
//             </li>
//             <li>
//               <Link to="/offer">Wishlist</Link>
//             </li>
//             <li>
//               <Link to="#">Login</Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

      

//       <section className={`Navigation ${isSticky ? 'sticky' : ''}`}>
//         <select  className='location' value={location} onChange={handleLocationChange}>
//           <option>Machhapokhari, Tokha</option>
//         </select>

//         <section className="searchbox">
//           <input
//             className="searchboxfilter"
//             type="text"
//             placeholder="Search Fruits"
//             value={searchTerm}
//             onChange={handleSearch}
            
//           />
          
//           <div className="search-container" ref={searchRef}>
//             {/* {searchTerm.length > 0 && (
             
//              <button className="clear-button" onClick={handleClear}>
//              X
//            </button>
           
//             )} */}

//             {searchTerm.length > 1 && (
//               <div className="search-results">
//                 {renderSearchResults()}
//                 {!showMore && searchResults.length > 4 && (
//                   <div className="search-item" onClick={handleShowMore}>
//                     <div className="search-details">Show More</div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </section>


        

//         <section className="cart">
//           <div className="cart-container">
//             <FaShoppingCart className="cart-icon" />
//             <span className="cart-count">{cartCount}</span>
//           </div>
//           Item - Nrs.{totalAmount}
//         </section>
//       </section>
//     </div>
//   );
// }

// export default Navigation;
