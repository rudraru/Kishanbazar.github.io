// import React from 'react';
// import './Home.css'
// class VegetableCard extends React.Component {
//   render() {
//     const { name, image, price } = this.props;
//     return (
//       <div className="vegetable-card">
//         <img src={image} alt='Hello' />
//         <h3>{name}</h3>
//         <p>Rs.{price}</p>
//         <button>Add to Cart</button>
//       </div>
//     );
//   }
// }

// export default VegetableCard;


import React from 'react';
import './Home.css'

class VegetableCard extends React.Component {
  render() {
    const { name, image, price } = this.props;
    let imagePath;

    if (typeof image === 'string') {
      // If the image is a string, assume it is a URL
      imagePath = image;
    } else if (typeof image === 'object' && image.hasOwnProperty('default')) {
      // If the image is an object with a 'default' property, assume it is a module import
      imagePath = image.default;
    } else {
      // If the image source is not recognized, show a placeholder image
      imagePath = 'https://via.placeholder.com/150';
    }

    return (
      <div className="vegetable-card">
        <img src={imagePath} alt={name} />
        <h3>{name}</h3>
        <p>Rs.{price}</p>
        <button>Add to Cart</button>
      </div>
    );
  }
}

export default VegetableCard;


