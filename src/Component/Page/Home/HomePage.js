import { React, useState, useEffect } from 'react';
import './Home.css';
import '../../Page/Aboutus.css';
import FruitsForm from '../FruitsForm';
import fruits from '../Card';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Fruit');
  const [showShopNow, setShowShopNow] = useState({});

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredFruits = fruits
    .filter((fruit) => fruit.category === selectedCategory)
    .slice(0, 6);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in, .letter-animation');

    const handleScroll = () => {
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          element.classList.add('fade-in');
          element.classList.add('letter-animation');
        } else {
          element.classList.remove('fade-in');
          element.classList.remove('letter-animation');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleProductHover = (fruitId) => {
    setShowShopNow((prevState) => ({ ...prevState, [fruitId]: true }));
  };

  const handleProductLeave = (fruitId) => {
    setShowShopNow((prevState) => ({ ...prevState, [fruitId]: false }));
  };

  const handleProductClick = (fruitId) => {
    // Redirect to fruit details page using the fruitId
    window.location.href = `/fruits/${fruitId}`;
  };

  const handleShopNowClick = (e, fruitId) => {
    e.stopPropagation();
    // Redirect to fruit details page using the fruitId
    window.location.href = `/fruits`;
  };

  return (
    <div>
      <section className="banner fade-in">
        <div className="banner-content">
          <h1>Welcome to our Fruit Shop!</h1>
          <p>Discover a wide variety of fresh and delicious fruits.</p>
          <Link to="/fruits" className="btn">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="my-section fade-in">
        <div>
          <h3>नेपाली माटो,नेपाली उत्पादन</h3>
          <h2>स्वस्त तरकारी, स्वस्त जीवन</h2>
          <h6>Rethinking the future of fresh produce consumption into your kitchen.</h6>
          <Link to="/Aboutus">
            <button>Read more</button>
          </Link>
        </div>
      </section>

      <section className="gallery fade-in">
        <h2>Featured Product</h2>
        <div className="category-selector1">
          {['Fruit', 'Vegetable', 'Leafy', 'Pickle'].map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'selected' : ''}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="product-container">
          {filteredFruits.map((fruit) => (
            <div
              className="fruit fade-in"
              key={fruit.id}
              onMouseEnter={() => handleProductHover(fruit.id)}
              onMouseLeave={() => handleProductLeave(fruit.id)}
              onClick={() => handleProductClick(fruit.id)}
            >
              <h3 className="letter-animation">{fruit.name}</h3>
              <img src={fruit.image} alt={fruit.name} className="letter-animation" />
              <p className="letter-animation">Price: Rs.{fruit.price}</p>
              {showShopNow[fruit.id] && (
                <button
                  className="shop-now-button"
                  onClick={(e) => handleShopNowClick(e, fruit.id)}
                >
                  Shop Now
                </button>
              )}
            </div>
          ))}
        </div>
      </section>
      <Link className="shopbtn fade-in" to="/shop">
        <button>Go To Shop Page</button>
      </Link>
    </div>
  );
};

export default HomePage;
