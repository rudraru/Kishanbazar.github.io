import React from 'react';
import VegetableCard from './VegetableCard';
import fruits from './Card';
import { Link } from 'react-router-dom';
import './Home.css'







class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.scrollContainer = React.createRef();
    this.scrollSpeed = 300; // scroll speed in pixels
  }

  scrollLeft = () => {
    this.scrollContainer.current.scroll({
      left: this.scrollContainer.current.scrollLeft - this.scrollSpeed,
      behavior: 'smooth'
    });
  }

  scrollRight = () => {
    this.scrollContainer.current.scroll({
      left: this.scrollContainer.current.scrollLeft + this.scrollSpeed,
      behavior: 'smooth'
    });
  }

  render() {
    return (
      <div>
        <section className="banner">
          <h1 className='Slogan'>Welcome to our Shop! Kishan Ko Bazar</h1>
          <p className='Slogan'> नेपाली माटो ,नेपाली उत्पादन स्वस्थ तरकारी स्वस्थ जीवन </p>
          <div>
        
            <Link to='./fruits'>
            <p className='Slogan'>Get fresh and healthy vegetables at affordable prices</p>
              <button>Click to shop</button>
            </Link>
          </div>

        </section>

        <section className="why-choose-us">
  <h2>Why Choose Us?</h2>
  <ul>
    <li>We source our produce directly from local farmers, ensuring freshness and quality.</li>
    <li>We offer a wide variety of fruits, vegetables, and other produce at competitive prices.</li>
    <li>Our friendly staff is always available to answer your questions and help you find what you need.</li>
    <li>We prioritize sustainability and environmentally friendly practices in our operations.</li>
  </ul>
</section>


        {/* <section className="featured">
          <h2>Featured Vegetables</h2>
          <div className="scroll-container" ref={this.scrollContainer}>
            <div className="vegetable-card-container">
               {fruits.map((vegetable, index) => (
                <VegetableCard
                  key={index}
                  name={vegetable.name}
                  image={vegetable.image}
                  price={vegetable.price}
                />
              ))}
<div className="vegetable-card-container">
          {fruits.map((vegetable, index) => (
            <VegetableCard
              key={index}
              name={vegetable.name}
              image={vegetable.image}
              price={vegetable.price}
            />
          ))}
        </div>  




            </div>
          </div>
  




          <div className="scroll-buttons">
            <button onClick={this.scrollLeft}>&#60;Scroll</button>
            <button onClick={this.scrollRight}>&#62;Scroll</button>
          </div>
        </section>  */}






{/* 


        <section className="categories">
          <h2>Shop by Category</h2>
          <ul>
            <li><a href="/vegetables/fresh">Fresh Vegetables</a></li>
            <li><a href="/vegetables/organic">Lefy Item</a></li>
            <li><a href="/vegetables/imported">Sand Item</a></li>
          </ul>
        </section> */}
      </div>
    );
  }
}

export default Homepage;
