import React, { useState, useEffect, useRef } from 'react';

const ImageSlideshow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalRef.current); // Cleanup on unmount
  }, [images, currentIndex]);

  return (
    <div className="slideshow" style={{ height: '450px', width: '100vw',objectFit:'cover' }}>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
    </div>
  );
};

export default ImageSlideshow;

