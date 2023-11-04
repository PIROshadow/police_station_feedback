"use client"

import StarRating from 'react-star-rating-component';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../globals.css';

const RatingStar = () => {
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);

  const handleStarClick1 = (nextValue) => {
    setRating1(nextValue);
  };
  const handleStarClick2 = (nextValue) => {
    setRating2(nextValue);
  };
  const handleStarClick3 = (nextValue) => {
    setRating3(nextValue);
  };
  const handleStarClick4 = (nextValue) => {
    setRating4(nextValue);
  };

  return (
    <div className='grid item-center grid-cols-2 gap-4 '>
    <div className=" bg-white text-black p-4 rounded-lg shadow-md  ">
      
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <div className="bg-white text-black p-4 ">
            <div className="mr-5 text-2xl font-semibold inline-block ">
              • Star-Rating:
            
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-4 ">
          <div className="mr-4 text-xl font-semibold">Rate this:</div>
          <div className="text-4xl">
            <StarRating
              name="rating1"
              value={rating1}
              onStarClick={handleStarClick1}
              starCount={5}
              starColor="#ffb400"
              emptyStarColor="#ccc"
              size={50}
            />
          </div>
          <span className=" text-sm font-semibold">Rating: {rating1}</span>
        </div>

        <div className="bg-white text-black p-4 ">
          <div className="mr-4 text-lg font-semibold">Rate this:</div>
          <div className="text-4xl">
            <StarRating
              name="rating2"
              value={rating2}
              onStarClick={handleStarClick2}
              starCount={5}
              starColor="#ffb400"
              emptyStarColor="#ccc"
              size={50}
            />
          </div>
          <span className=" text-sm font-semibold">Rating: {rating2}</span>
        </div>

        <div className="bg-white text-black p-4 ">
          <div className="mr-4 text-lg font-semibold">Rate this:</div>
          <div className="text-4xl">
            <StarRating
              name="rating3"
              value={rating3}
              onStarClick={handleStarClick3}
              starCount={5}
              starColor="#ffb400"
              emptyStarColor="#ccc"
              size={50}
            />
          </div>
          <span className="ml-1 text-sm font-semibold">Rating: {rating3}</span>
        </div>
        <div className="bg-white text-black p-4 ">
          <div className="mr-4 text-lg font-semibold">Rate this:</div>
          <div className="text-4xl">
            <StarRating
              name="rating3"
              value={rating3}
              onStarClick={handleStarClick3}
              starCount={5}
              starColor="#ffb400"
              emptyStarColor="#ccc"
              size={50}
            />
          </div>
          <span className="ml-1 text-sm font-semibold">Rating: {rating3}</span>
        </div>
      </div>


    </div>
    <div className=' bg-white text-black p-4 rounded-lg shadow-md'><Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper></div>
    </div>
  );
};

export default RatingStar;
