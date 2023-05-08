import React from 'react';
import ReactPlayer from 'react-player';
import './Videobackground.css'
const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=fEErySYqItI&pp=ygUpY2luZW1hdGljIHZpZGVvIGJhY2tncm91bmQgc2NlbmUgb2YgbmVwYWw%3D"
       
        width="100%"
        height="100%"
        playing
        loop
        muted
      />



      <>
      
     
      
      
      </>
    </div>
  );
};

export default VideoBackground;
