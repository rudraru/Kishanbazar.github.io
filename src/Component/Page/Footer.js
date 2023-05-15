import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';



import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
<footer>
  <div className="footer">


<div className="row">
  <a href="#">
    <FaFacebook />
  </a>
  <a href="#">
    <FaInstagram />
  </a>
  <a href="#">
    <FaYoutube />
  </a>
  <a href="#">
    <FaTwitter />
  </a>
</div>
    <div className="row">
      <ul>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">Our Services</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">Terms &amp; Conditions</a>
        </li>
        <li>
          <a href="#">Career</a>
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
