import {React,useState} from 'react';
import './Home.css';
import '../../Page/Aboutus.css'

import fruits from '../Card';
import { Link } from 'react-router-dom';

const HomePage = () => {


  const [selectedCategory, setSelectedCategory] = useState('Fruit');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredFruits = fruits.filter((fruit) => fruit.category === selectedCategory ).slice(0, 6);


  return (
    
    <div>
     <section className="banner">
  <div className="banner-content">
    <h1>Welcome to our Fruit Shop!</h1>
    <p>Discover a wide variety of fresh and delicious fruits.</p>
    <Link to="/fruits" className="btn">Shop Now</Link>

  </div>
</section>


<section className="my-section">
      <div>
        <h3>नेपाली माटो,नेपाली उत्पादन</h3>
        <h2>स्वस्त तरकारी, स्वस्त जीवन</h2>
        <h6>Rethinking the future of fresh produce consumption into your kitchen.</h6>
        <Link to='/Aboutus'>
        <button>Read more</button>
        </Link>
      </div>
    </section>


      <section className="gallery">
        <h2>Featured Product</h2>
        <div className="category-selector">
        {['Fruit', 'Vegetable','Leafy','Grossary'].map((category) => (
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
          <div className="fruit" key={fruit.id}>
            <h3>{fruit.name}</h3>
            <img src={fruit.image} alt={fruit.name} />
            <p>Price: Rs.{fruit.price}</p>
       
          </div>
        ))}
        
      </div>
      </section>
      <Link className='shopbtn'>
       <button> Go To Shop Page </button>
       </Link>

 
    </div>
  );
};

export default HomePage;
