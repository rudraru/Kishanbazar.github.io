
// import Owner1 from './images/owner1.jpg';
// import Owner2 from './images/owner2.jpg';
// import Owner3 from './images/owner3.jpg';
import React from 'react';
import './Aboutus.css'

const AboutUs = () => {
return (
<>
{/* Main content */}
<main>
<div className="about-us-container">
<h1 className="title">Welcome to Kisan Ko Bazar!</h1>
<p className="description">
Kisan Ko Bazar is more than just a local farm-to-table produce stand. It's a community hub where farmers and food enthusiasts come together to share their passion for sustainable farming practices and fresh, high-quality produce. Established in [insert year], Kisan Ko Bazar has been providing the [insert location] community with delicious, locally-grown fruits and vegetables for [insert number] years. <br/> <br/>

At Kisan Ko Bazar, we believe that fresh, healthy food is a basic human right. That's why we work hard to ensure that all of our produce is grown using sustainable farming practices that are good for the environment and good for you. From the moment our fruits and vegetables are planted, we take care to nourish them with the right balance of nutrients, water, and sunlight, so that they can grow into the flavorful, nutrient-rich foods that you'll find on our shelves. <br/> <br/>

When you shop at Kisan Ko Bazar, you're not just buying food. You're supporting a local business that is committed to making a positive impact on the community. We believe that by providing access to fresh, healthy food, we can help improve people's health, reduce their carbon footprint, and create a more sustainable future for everyone.
<br/> <br/>
Come visit us at Kisan Ko Bazar and experience the difference that fresh, sustainably-grown produce can make in your life. We're open [insert hours of operation], and our friendly staff is always ready to answer your questions and help you find the perfect fruits and vegetables for your needs.
<br/> <br/>
[insert photo of Kisan Ko Bazar]
<br/> <br/>
At Kisan Ko Bazar, we're more than just a produce stand. We're a gathering place where people from all walks of life can come together to learn about sustainable farming practices, share recipes, and connect with their community. Whether you're a seasoned chef or a novice home cook, we have the fresh, high-quality produce that you need to create delicious, healthy meals that your family will love.
<br/> <br/>
We believe that everyone deserves access to fresh, healthy food, regardless of their income level or background. That's why we offer a variety of pricing options to make our produce affordable for everyone. We also work closely with local food banks and community organizations to donate surplus produce to those in need.
<br/> <br/>
At Kisan Ko Bazar, we're committed to creating a more sustainable future for our community and our planet. We hope that you'll join us in our mission to promote sustainable agriculture, support local farmers, and provide access to fresh, healthy food for everyone.





</p>
{/* <p className="description">
Located in the heart of [insert location], our farm has been providing fresh produce to the community for [insert number] years. We take pride in our commitment to quality and sustainability, and we work hard to ensure that our customers are always satisfied with our products.
</p>
<p className="description">
All of our fruits and vegetables are grown using sustainable farming practices and are carefully harvested and inspected to ensure that only the best produce makes it to your table. We believe in the importance of knowing where your food comes from, and we are proud to be able to offer you the freshest, locally-grown produce available.
</p> */}
</div>
    {/* Owner cards */}
    <div className="owner-cards-container">
      <div className="owner-card">
        <div className="owner-photo" style={{ backgroundImage: `url('owner1.jpg')` }}></div>
        <h2 className="owner-name">Amrit Basnet</h2>
        <p className="owner-position">Co-Founder and CEO</p>
      </div>
      <div className="owner-card">
        <div className="owner-photo" style={{ backgroundImage: `url('')` }}></div>
        <h2 className="owner-name">Aayush Kharel</h2>
        <p className="owner-position">Co-Founder and COO</p>
      </div>
      <div className="owner-card">
        <div className="owner-photo" style={{ backgroundImage: `url('owner3.jpg')` }}></div>
        <h2 className="owner-name">Man Bahadur</h2>
        <p className="owner-position">Head of Marketing</p>
      </div>
    </div>
  </main>

        {/* Footer
        <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">Vegetables</h3>
            <ul >
            <li>Apples</li>
              <li>Bananas</li>
              <li>Oranges</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Fruits</h3>
            <ul>
              <li>Apples</li>
              <li>Bananas</li>
              <li>Oranges</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul>
              <li>Phone: 123-456-7890</li>
              <li>Email: kisan.ko.bazar@example.com</li>
              <li>Address: 123 Main Street, [Insert City], [Insert State] [Insert Zip Code]</li>
            </ul>
          </div>
        </div>
      </footer> */}
      </>
)};
export default AboutUs;