


// import React from 'react';

// import { Link } from 'react-router-dom';
// import './Home.css'


// class Homepage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.scrollContainer = React.createRef();
//     this.scrollSpeed = 300; // scroll speed in pixels
//   }

//   scrollLeft = () => {
//     this.scrollContainer.current.scroll({
//       left: this.scrollContainer.current.scrollLeft - this.scrollSpeed,
//       behavior: 'smooth'
//     });
//   }

//   scrollRight = () => {
//     this.scrollContainer.current.scroll({
//       left: this.scrollContainer.current.scrollLeft + this.scrollSpeed,
//       behavior: 'smooth'
//     });
//   }

//   render() {
//     return (
//       <div>
//         <section className="banner">
//           <h1 className='Slogan'>Welcome to our Shop! Kishan Ko Bazar</h1>
//           <p className='Slogan'> नेपाली माटो ,नेपाली उत्पादन स्वस्थ तरकारी स्वस्थ जीवन </p>
//           <div>
        
//             <Link to='./fruits'>
//             <p className='Slogan'>Get fresh and healthy vegetables at affordable prices</p>
//               <button>Click to shop</button>
//             </Link>
//           </div>

//         </section>

//         <section className="why-choose-us">
//   <h2>Why Choose Us?</h2>
//   <ul>
//     <li>We source our produce directly from local farmers, ensuring freshness and quality.</li>
//     <li>We offer a wide variety of fruits, vegetables, and other produce at competitive prices.</li>
//     <li>Our friendly staff is always available to answer your questions and help you find what you need.</li>
//     <li>We prioritize sustainability and environmentally friendly practices in our operations.</li>
//   </ul>
// </section>
//         <section className="categories">
//           <h2>Shop by Category</h2>
//           <ul>
//             <li><a href="/vegetables/fresh">Fresh Vegetables</a></li>
//             <li><a href="/vegetables/organic">Lefy Item</a></li>
//             <li><a href="/vegetables/imported">Sand Item</a></li>
//           </ul>
//         </section>
//       </div>
//     );
//   }
// }

// export default Homepage;



import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
// import Category from '../Image/Category.jpg'
import why from '../../Image/whyuss.jpg'
import homefrist from '../../Image/Flw.png'
import Aft from '../../Image/Category.jpg'
import FreshP from '../../Image/Veglady.png'
import shopnow from '../../Image/VeganShop.png'

function Homepage() {
 
  return (




      <main>
      
      <header className={`${styles.banner} banner`} style={{ backgroundImage: `url(${homefrist})`  }} >
   
      <div class="container">

  <div class="contentHero">
    <h1>Kishan Ko Bazar</h1>
    <p class="text">A selection of fresh, seasonal produce delivered straight to your door.</p>
    <p class="text">
      Nepali Mato Nepali <span class="highlight">Utpadan</span>, 
      Swasta Tarkari, 
      Swasta <span class="highlight">Jiwan</span>.
    </p>
  </div>
</div>

      </header>


     <div className={`${styles.Produce} Produce`} style={{ backgroundImage: `url(${FreshP})`  }}>



     <div class="container1">
  <h2>Fresh Produce</h2>
  <ul>
    <li><span class="check"></span>Cauliflower</li>
    <li><span class="check"></span>Tomato</li>
    <li><span class="check"></span>Lettuce</li>
    {/* <!-- Add more items as needed --> */}
  </ul>
</div>



     </div>





     <div className={`${styles.Produce} Produce`} style={{ backgroundImage: `url(${shopnow})`  }}>

<section className={`${styles.shopbtn } shopbtn`}>
  
  <Link to='/fruits'>
            Click to shop
          </Link> 
          </section>

          

</div>




       <section className={`${styles.whyChooseUs} whyChooseUs`} style={{ backgroundImage: `url(${why})` }}>
  <div className={styles.whyChooseUsContent}>
    <h2 className={styles.whyChooseUsTitle}>Why Choose Us?</h2>
    <div className={styles.whyChooseUsChart}>
      <div className={styles.chartItem}>
        <div className={styles.chartItemTitle}>Fresh Produce</div>
        <div className={styles.chartItemBar}><div className={styles.chartItemBarFilled} style={{ width: '80%' }}></div></div>
        <div className={styles.chartItemPercentage}>80%</div>
      </div>
      <div className={styles.chartItem}>
        <div className={styles.chartItemTitle}>Low Prices</div>
        <div className={styles.chartItemBar}><div className={styles.chartItemBarFilled} style={{ width: '90%' }}></div></div>
        <div className={styles.chartItemPercentage}>90%</div>
      </div>
      <div className={styles.chartItem}>
        <div className={styles.chartItemTitle}>Local Sourcing</div>
        <div className={styles.chartItemBar}><div className={styles.chartItemBarFilled} style={{ width: '70%' }}></div></div>
        <div className={styles.chartItemPercentage}>70%</div>
      </div>
    </div>
    <ul className={styles.whyChooseUsList}>
      <li><span className={styles.whyChooseUsBullet}></span>We source our produce directly from local farmers, ensuring freshness and quality.</li>
      <li><span className={styles.whyChooseUsBullet}></span>We offer a wide variety of fruits, vegetables, and other produce at competitive prices.</li>
      <li><span className={styles.whyChooseUsBullet}></span>Our friendly staff is always available to answer your questions and help you find what you need.</li>
      <li><span className={styles.whyChooseUsBullet}></span>We prioritize sustainability and environmentally friendly practices in our operations.</li>
      <li><span className={styles.whyChooseUsBullet}></span>Low prices guaranteed.</li>
      <li><span className={styles.whyChooseUsBullet}></span>Explore our branches for more options.</li>
    </ul>
  </div>
</section>


      <section className={styles.categories }style={{ backgroundImage: `url(${Aft})` }}>
        <h2>Shop by Category</h2>
        <ul>
          <li><Link to='/vegetables/fresh' className={styles.link}>Fresh Vegetables</Link></li>
          <li><Link to='/vegetables/organic' className={styles.link}>Leafy Items</Link></li>
          <li><Link to='/vegetables/imported' className={styles.link}>Sand Items</Link></li>
        </ul>
      </section> 
    </main>
   
  );
}

export default Homepage;
