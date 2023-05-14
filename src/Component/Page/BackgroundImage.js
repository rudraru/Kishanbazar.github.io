import React from 'react';

function BackgroundImage({ image }) {
  const styles = {

    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
   
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
    position: 'fixed',
   
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div style={styles} />
  );
}

export default BackgroundImage;
