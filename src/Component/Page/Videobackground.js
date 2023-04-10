import React from 'react';
import ReactPlayer from 'react-player';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=iNjxfGJxpns"
        width="100%"
        height="100%"
        playing
        loop
        muted
      />
    </div>
  );
};

export default VideoBackground;
