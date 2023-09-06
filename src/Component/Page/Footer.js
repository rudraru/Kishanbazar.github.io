import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="row1">
          <Link to="#">
            <FaFacebook />
          </Link>
          <Link to="#">
            <FaInstagram />
          </Link>
          <Link to="#">
            <FaYoutube />
          </Link>
          <Link to="#">
            <FaTwitter />
          </Link>
        </div>
        <div className="row">
          <ul>
            <li>
              <Link to="/contactus">Contact us</Link>
            </li>
            <li>
              <Link to="Aboutus">Our Services</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/trmsandcdn">Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="#">Career</Link>
            </li>
          </ul>
        </div>
        <div className="row">
          Copyright © 2023 Inferno - All rights reserved :ecoaapnepal
        </div>
      </div>
    </footer>
  );
}

export default Footer;

