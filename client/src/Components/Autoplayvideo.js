import React, { useRef, useEffect } from 'react';
import video1 from '../videos/0702.mp4';
import './Autoplayvideo.css'

const AutoplayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    video.autoplay = true;
    video.loop = true;

    // Event listener to handle video ended event
    const handleVideoEnded = () => {
      video.currentTime = 0; // Reset video time to beginning
      video.play(); // Play the video again
    };

    video.addEventListener('ended', handleVideoEnded);

    // Cleanup function to remove event listener on component unmount
    return () => video.removeEventListener('ended', handleVideoEnded);
  }, [video1]);

  return (
    <div className='autoplay-component'>
    <video  className='autoplay-video-actual' ref={videoRef} src={video1} muted playsInline>
      Your browser does not support the video tag.
    </video>
    </div>
  );
};

export default AutoplayVideo;


