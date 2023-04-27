

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  render() {
    return (
      <nav className="nav">
        <div className="toggle-button" onClick={this.toggleMenu}>
          <div className={this.state.showMenu ? "toggle-line active" : "toggle-line"}></div>
          <div className={this.state.showMenu ? "toggle-line active" : "toggle-line"}></div>
          <div className={this.state.showMenu ? "toggle-line active" : "toggle-line"}></div>
        </div>
        <ul className={this.state.showMenu ? "nav-items show-menu" : "nav-items"}>
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/aboutus/us">About Us</Link></li>
          <li className="nav-item"><Link to="/vegetables">Vegetables</Link></li>
          <li className="nav-item"><Link to="/fruits">Fruits</Link></li>
          <li className="nav-item"><Link to="/contactus">Contact Us</Link></li>
          <li className="nav-item"><Link to="/cart">Cart</Link></li>
        </ul>
        <form className="search-box">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </nav>
    );
  }
}

export default Navigation;
