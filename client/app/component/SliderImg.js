// components/ImageSlider.js
"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageSlider = () => {
  return (
    <Carousel>
      <div>
        <img src="/image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="/image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="/image3.jpg" alt="Image 3" />
      </div>
    </Carousel>
  );
};

export default ImageSlider;
