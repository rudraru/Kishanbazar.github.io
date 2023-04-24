import React from 'react';
import ReactPlayer from 'react-player';
import './Videobackground.css'
const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dnkmHthDSEo&list=PLxox4EslpGPwLppU_bRR92jGlMfqZ3lOH&index=2"
       
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
