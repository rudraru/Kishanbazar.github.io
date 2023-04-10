import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

class Navigation extends React.Component {
  render() {
    return (
      <nav className='nav'>
        <ul className='Navitem'>
       
          <Link to='/' > Home</Link>
      
          <Link to='/Aboutus' > About us</Link>
        
         
          <Link to='/fruits' > Vegetables</Link>
          <Link to='/fruits' > Fruits </Link>
          <Link to='/Contactus' > Contact us</Link>
          <Link to='/fruits' > Cart</Link>
          
        </ul>
        <form >
        <div class="search-box">
  <input type="text" placeholder="Search..."/>
  <button type="submit">Search</button>


 <Link to='/SignIn'>
  <button type='submit'>Sign In</button> 

  </Link> 

  <Link to='/Signup'>
  <button type='submit'>Sign Up</button> 

  </Link>


</div>
        </form>
      </nav>
    );
  }
}

export default Navigation;
