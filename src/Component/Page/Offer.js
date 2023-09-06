import React from 'react';
import './Offer.css';
import { Link } from 'react-router-dom';
const Offer = () => {
  return (

    
    <div>
    <Link className='Backclass' to='/'>
   Home   /
</Link>
<Link className='Backclass' to='/offer'>
Offer
</Link>
    <div className="offer">
      <h2>Oops..!</h2>
      <p>At this moment no offer on the product.</p>
      <p>Soon, we will have an offer on products.</p>
    </div>
    </div>
  );
};

export default Offer;
