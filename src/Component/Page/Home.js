


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
// import Category from '../Image/Category.jpg'
import why from '../Image/whyuss.jpg'
import homefrist from '../Image/Login.jpg'
import Aft from '../Image/Category.jpg'
function Homepage() {

  return (
    <main>
      <header className={`${styles.banner} banner`} style={{ backgroundImage: `url(${homefrist})` }} >
        <h1 className={styles.slogan}>Welcome to our Shop! Kishan Ko Bazar</h1>
        <p className={styles.slogan}> नेपाली माटो ,नेपाली उत्पादन स्वस्थ तरकारी स्वस्थ जीवन </p>
        <div className={styles.cta}>
          <p className={styles.slogan}>Get fresh and healthy vegetables at affordable prices</p>
          <Link to='/fruits' className={styles.link}>
            Click to shop
          </Link>
        </div>
      </header>

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
