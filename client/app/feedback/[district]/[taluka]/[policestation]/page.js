"use client"

import StarRating from 'react-star-rating-component';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../../../globals.css';

export default function PoliceStationInfo({ params }) {
  console.log(params.district, params.taluka, params.policestation);
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

        <div className="gap-4">
          <div className="col-span-2">
            <div className="bg-white text-black">
              <div className="bg-white text-black justify-center font-bold pb-6">
                <div className='flex justify-between w-full items-center'>
                  <h1 className="text-2xl font-bold">Sola police station</h1>
                  <Link href={`/feedback/${params.district}/${params.taluka.toLowerCase()}/sola/form`} ><span class="bg-blue-700 text-white font-medium rounded-lg px-4 py-2.5">Give Feedback</span></Link>
                </div>
                <p className="mt-2">
                  Address: 123 Main Street, City, Zip Code
                </p>
                <p className="mt-1">
                  Contact: +1234567890
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5 text-2xl font-semibold  ">
              Star-Rating
            </div>
            <div className='w-full grid grid-cols-2 gap-4'>
              <div className="bg-white text-black">
                <div className="text-xl font-semibold">Service Quality</div>
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

              <div className="bg-white text-black">
                <div className="text-lg font-semibold">Response Time</div>
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

              <div className="bg-white text-black">
                <div className="text-lg font-semibold">Police Behavior</div>
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
              <div className="bg-white text-black">
                <div className="text-lg font-semibold">Infrastructure</div>
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
        <SwiperSlide ><img src='https://images.news18.com/static-guju/uploads/2022/05/Sola-police-Station-16513985453x2.jpg?impolicy=website&width=540&height=339' /></SwiperSlide>
        <SwiperSlide><img src='https://pbs.twimg.com/media/Fu3gb-pX0AInFxC?format=jpg' /></SwiperSlide>
        <SwiperSlide><img src='https://static.abplive.com/wp-content/uploads/sites/7/2020/01/07090345/PSI1.jpg?impolicy=abp_cdn&imwidth=640' /></SwiperSlide>

      </Swiper></div>
    </div>

  );
}
