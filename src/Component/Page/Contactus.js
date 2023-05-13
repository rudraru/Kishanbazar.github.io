
import React, { useState, useRef } from 'react';
import './Contactus.css';

function ContactUs() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('/.netlify/functions/send-contact-email', {
      method: 'POST',
      body: data,
    })
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 5000);
        formRef.current.reset(); // reset the form fields
      })
      .catch((error) => {
        console.error('Error sending contact email:', error);
      });
  }

  
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <p className="contact-description">If you have any questions or concerns, please don't hesitate to reach out to us.</p>
      <ul className="contact-details">
        <li className="contact-details-item">Phone:+977 9864019163</li>
        <li className="contact-details-item">Email: info@kisankobazar.com</li>
        <li className="contact-details-item">Address:Machhapokhari, Tokha,Nepal</li>
      </ul>
      {showSuccessMessage && <p className="success-message">Thanks for contacting us!</p>}
      <form onSubmit={handleSubmit} data-netlify="true" method="POST" ref={formRef}>
        <input type="hidden" name="form-name" value="contact" />
        <label htmlFor="name" className="contact-label">Name:</label>
        <input type="text" id="name" name="name" className="contact-input" placeholder="Enter your name" required />
        <label htmlFor="email" className="contact-label">Email:</label>
        <input type="email" id="email" name="email" className="contact-input" placeholder="Enter your email" required />
        <label htmlFor="message" className="contact-label">Message:</label>
        <textarea id="message" name="message" className="contact-textarea" placeholder="Enter your message" required></textarea>
        <button type="submit" className="contact-submit-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
