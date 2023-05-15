import React from 'react';
import ReactPlayer from 'react-player';
import './Videobackground.css'
const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="../Video/Shoppingvideo.mp4"
       
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
