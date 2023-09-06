import React from 'react';
import './Aboutus.css';
import { Link } from 'react-router-dom';
const AboutUs = () => {
  return (

<div>

<Link className='Backclass' to='/'>
       Home   /
    </Link>
    <Link className='Backclass' to='/Aboutus'>
      Aboutus
    </Link>


    <div className="about-us-container">



      <h2 className="about-us-title">About Us</h2>

      <div className="services-container">
        <div className="service-container">
          <h3 className="service-title">Our Services</h3>
          <div className="service-description">
            <p>
              At Kishan ko Bazar, we are committed to providing top-notch services to our customers. Our range of services includes:
            </p>
            <ul className="service-list">
              <li>High-quality produce sourcing</li>
              <li>Fast and reliable delivery</li>
              <li>Competitive pricing</li>
              <li>Excellent customer support</li>
            </ul>
          </div>
          <img
            src="https://merokishan.com/uploads/aboutimages/impact-web.jpg"
            alt="Service"
            className="service-image"
          />
        </div>
      </div>
      <div className="team-container">
        <h3 className="team-title">Our Team</h3>
        <div className="team-member">
          <div className="team-card">
            <div className="team-card-image">
              <img
                src="https://scontent.fktm20-1.fna.fbcdn.net/v/t1.6435-9/90623727_1024309137951748_7879770176332234752_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-6BhsXqZUSIAX88tXXL&_nc_ht=scontent.fktm20-1.fna&oh=00_AfAv-r2kHeaeuN3lWh4S1NxK83ADhRSWCnPIdfu6xiNjmA&oe=649F2275"
                alt="Team Member"
                className="team-member-photo"
              />
            </div>
            <div className="team-card-content">
              <h4 className="team-member-name">Amrit Basnet</h4>
              <p className="team-member-role">Founder of Kishan ko Bazar</p>
            </div>
          </div>
        </div>
        <div className="team-member">
          <div className="team-card">
            <div className="team-card-image">
              <img
                src="https://scontent.fktm20-1.fna.fbcdn.net/v/t1.6435-9/74345746_905480593167937_3554915680388120576_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OPmRit-khB4AX-az0k0&_nc_ht=scontent.fktm20-1.fna&oh=00_AfA8eqnlqFNGCT5KcWJXQAcKifpME8mV1gIIp9OiIeYmwQ&oe=649F03B6"
                alt="Team Member"
                className="team-member-photo"
              />
            </div>
            <div className="team-card-content">
              <h4 className="team-member-name">Aayush Kharel</h4>
              <p className="team-member-role">Front-End Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
