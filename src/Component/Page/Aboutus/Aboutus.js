// import aboutus from '../Image/background-image-for-website-11.jpg'
import Owner2 from '../../Image/Aayush1.jpg';
import React from 'react';
import './Aboutus.css'

const AboutUs = () => {
  return (
    <>
      <div className="about-us-container" >
        <div className="overlay"></div>
        <div className="content">
          <h1>Welcome to Kisan Ko Bazar!</h1>
          <p>
            Kisan Ko Bazar is more than just a local farm-to-table produce stand. It's a community hub where farmers and food enthusiasts come together to share their passion for sustainable farming practices and fresh, high-quality produce. Established in [insert year], Kisan Ko Bazar has been providing the [insert location] community with delicious, locally-grown fruits and vegetables for [insert number] years.
          </p>
          <p>
            At Kisan Ko Bazar, we believe that fresh, healthy food is a basic human right. That's why we work hard to ensure that all of our produce is grown using sustainable farming practices that are good for the environment and good for you. From the moment our fruits and vegetables are planted, we take care to nourish them with the right balance of nutrients, water, and sunlight, so that they can grow into the flavorful, nutrient-rich foods that you'll find on our shelves.
          </p>
          <p>
            When you shop at Kisan Ko Bazar, you're not just buying food. You're supporting a local business that is committed to making a positive impact on the community. We believe that by providing access to fresh, healthy food, we can help improve people's health, reduce their carbon footprint, and create a more sustainable future for everyone.
          </p>
          <p>
            Come visit us at Kisan Ko Bazar and experience the difference that fresh, sustainably-grown produce can make in your life. We're open [insert hours of operation], and our friendly staff is always ready to answer your questions and help you find the perfect fruits and vegetables for your needs.
          </p>
        </div>
      </div>
      <div className="owner-cards-container">
        <div className="owner-card">
          <div className="owner-photo" style={{ backgroundImage: `url(${Owner2})` }}></div>
          <h2 className="owner-name">Aayush Kharel</h2>
          <p className="owner-position">Co-Founder and COO</p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
