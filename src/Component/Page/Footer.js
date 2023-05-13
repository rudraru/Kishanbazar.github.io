import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
//     <footer className="footer">
//       <div className="footer-container">
//       <div className="footer-left">
//   <ul>
//     <li>Address: 70-10 Road 1188 New York</li>
//     <li>Phone: +65 11.138.3488</li>
//     <li>Email: Oganic@gmail.com</li>
//   </ul>
// </div>

//         <div className="social-icons">
//           <a href="https://www.facebook.com">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="https://www.twitter.com">
//             <i className="fab fa-twitter"></i>
//           </a>
//           <a href="https://www.instagram.com">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://www.youtube.com">
//             <i className="fab fa-youtube"></i>
//           </a>
//         </div>
//       </div>
//       <div className="border-box">
//         <ul>
//           <li>
//             <Link to="/Aboutus/us">About Us</Link>
//           </li>
//           <li>
//             <Link to="/help">Need Help?</Link>
//           </li>
//           <li>
//             <Link to="/privacy">Privacy</Link>
//           </li>
//           <li>
//             <Link to="/terms">Terms of Use</Link>
//           </li>
//           {/* <li>
//             <Link to="/blogs">Blogs</Link>
//           </li> */}
//         </ul>
//       </div>
//     </footer>


<footer className="footer">
<div class="footer__left">
    <div class="footer__about__logo">
      <a href="./index.html"> <img src="img/logo.png" alt=""/></a>
    </div>
    <div class="address">
      <ul>
        <li>Address: 70-10 Road 1188 New York</li>
        <li>Phone: +65 11.138.3488</li>
        <li>Email: Oganic@gmail.com</li>
      </ul>
    </div>
  </div>
<div className="footer__useful-links">
  <h6>Useful Links</h6>
  <div  className="f-ul">
  <ul>
    <li><Link to="#">About Us</Link></li>
    <li><Link to="#">About Our Shop</Link></li>
    <li><Link to="#">Secure Shopping</Link></li>
    <li><Link to="#">Delivery infomation</Link></li>
    <li><Link to="#">Privacy Policy</Link></li>
    <li><Link to="#">Our Sitemap</Link></li>
  </ul>
  <ul>
    <li><Link to="#">Who We Are</Link></li>
    <li><Link to="#">Our Services</Link></li>
    <li><Link to="#">Projects</Link></li>
    <li><Link to="#">Contact</Link></li>
    <li><Link to="#">Innovation</Link></li>
    <li><Link to="#">Testimonials</Link></li>
  </ul>
</div>
</div>
<div className="newsletter">
  <h6>Join Our Newsletter Now</h6>
  <p>Get E-mail updates about our latest shop and special offers.</p>
  <form action="#">
    <input type="text" placeholder="Enter your mail" />
    <button type="submit" className="site-btn">
      Subscribe
    </button>
  </form>
  <div className="icon">
    <Link to="#"><FaFacebook /></Link>
    <Link to="#"><FaInstagram /></Link>
    <Link to="#"><FaTwitter /></Link>
    <Link to="#"><FaPinterest /></Link>
  </div>
      </div>
      <div class="footer-disclaimer">
    <p>© 2023 All rights reserved <i class="fa fa-heart" aria-hidden="true"></i></p>
  </div>
</footer>


  );
}

export default Footer;
