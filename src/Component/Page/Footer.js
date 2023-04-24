import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="kisan-bazar">
          <h2>Kisan Ko Bazar</h2>
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Phone: 555-1234</p>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="border-box">
        <ul>
          <li>
            <Link to="/Aboutus/us">About Us</Link>
          </li>
          <li>
            <Link to="/help">Need Help?</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Use</Link>
          </li>
          {/* <li>
            <Link to="/blogs">Blogs</Link>
          </li> */}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
