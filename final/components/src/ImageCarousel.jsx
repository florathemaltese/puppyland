import React, { useState, useEffect } from 'react';

function ImageCarousel() {
  // 假设你有一个图片数组
  const images = [
    'images/chef.jpg',
    'images/dancer.jpg',
    'images/doctor.jpg',
    'images/lawyer.jpg',
    'images/pilot.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="Carousel" />
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;
