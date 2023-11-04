"use client"

import StarRating from 'react-star-rating-component';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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

    <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 grid item-center grid-cols-1 md:grid-cols-2 gap-4 '>
      <div className=" bg-white text-black p-4 rounded-lg shadow-md  ">

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <div className="bg-white text-black p-2 ">
              <div className="bg-white p-2 text-black justify-center font-bold pb-6  inline-block">
                <h1 className="text-4xl font-bold">Sola police station</h1>
                <p className="mt-2 text-sm">3GPH+WVW, Sarkhej - Gandhinagar Hwy, Chanakyapuri, Ahmedabad, Gujarat 380081</p>
              </div>
              <div className="mr-5  text-2xl font-semibold  ">
                Star-Rating:
              </div>
            </div>
          </div>

          <div className="bg-white text-black p-4 pt-2 ">
            <div className="mr-4 text-xl font-semibold">Service Quality</div>
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
            
          </div>

          <div className="bg-white text-black p-4 pt-2 ">
            <div className="mr-4 text-lg font-semibold">Response Time</div>
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
           
          </div>

          <div className="bg-white text-black p-4 ">
            <div className="mr-4 text-lg font-semibold">Police Behavior</div>
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
           
          </div>
          <div className="bg-white text-black p-4 ">
            <div className="mr-4 text-lg font-semibold">Infrastructure</div>
            <div className="text-4xl">
              <StarRating
                name="rating4"
                value={rating4}
                onStarClick={handleStarClick4}
                starCount={5}
                starColor="#ffb400"
                emptyStarColor="#ccc"
                size={50}
              />
            </div>
            
          </div>
        </div>


      </div>
      <div className=' bg-white text-black p-4 rounded-lg shadow-md h-[440px]'><Swiper
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
        <SwiperSlide ><img src='https://images.news18.com/static-guju/uploads/2022/05/Sola-police-Station-16513985453x2.jpg?impolicy=website&width=540&height=339'/></SwiperSlide>
        <SwiperSlide><img src='https://pbs.twimg.com/media/Fu3gb-pX0AInFxC?format=jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://static.abplive.com/wp-content/uploads/sites/7/2020/01/07090345/PSI1.jpg?impolicy=abp_cdn&imwidth=640'/></SwiperSlide>

        </Swiper></div>
    </div>

  );
};

export default RatingStar;
