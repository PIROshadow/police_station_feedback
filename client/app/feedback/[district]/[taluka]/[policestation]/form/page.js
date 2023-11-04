'use client'

import StarRating from 'react-star-rating-component';
import React, { useRef, useState } from 'react';

export default function PoliceStationForm({ params }) {
  console.log("Policestation:", params.district, params.taluka, params.policestation, params.policestationId);
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
    <section className="max-w-screen-md mx-auto px-4 py-10 text-black">
      <div>
        <h3 className="text-lg font-semibold">Name of Police Station</h3>
        <p className="mt-2">
          <strong>Address:</strong> 123 Main Street, City, Zip Code
        </p>
        <p className="mt-1">
          <strong>Contact:</strong> +1234567890
        </p>
      </div>
      <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
      <form>
        <h2 class="text-lg font-semibold mb-3">Your Information</h2>

        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
          <input type="name" id="name" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[#281859] focus:border-[#281859] active:border-[#281859] block w-full p-2.5" placeholder="Jayesh Patel" required />
        </div>

        <div class="mb-6">
          <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
          <input type="mobile" id="mobile" class="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[#281859] focus:border-[#281859] active:border-[#281859] block w-full p-2.5" placeholder="1245789630" required />
        </div>

        <h2 class="text-lg font-semibold mb-3">Feedback Form</h2>

        <label for="service-quality">Service Quality</label>
        <div class="flex items-center mb-2 text-4xl">
          <StarRating
            name="rating1"
            value={rating1}
            onStarClick={handleStarClick1}
            starCount={5}
            starColor="#ffb400"
            emptyStarColor="#ccc"
            size={500}
          />
        </div>

        <label for="respond-time">Response Time</label>
        <div class="flex items-center mb-2 text-4xl">
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

        <label for="police-behaviour">Police Behavior</label>
        <div class="flex items-center mb-2 text-4xl">
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

        <label for="infrastructure">Infrastructure</label>
        <div class="flex items-center mb-2 text-4xl">
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

        <fieldset>
          <legend class="sr-only">Were you satisfied with the service?</legend>
          <label>Were you satisfied with the service?</label>
          <div class="flex items-center mb-4">
            <input id="country-option-1" type="radio" name="countries" value="yes" class="w-4 h-4 border-gray-300" />
            <label for="country-option-1" class="block ml-2 text-sm font-medium text-gray-900">
              Yes
            </label>
          </div>
          <div class="flex items-center mb-4">
            <input id="country-option-2" type="radio" name="countries" value="no" class="w-4 h-4 border-gray-300" />
            <label for="country-option-2" class="block ml-2 text-sm font-medium text-gray-900">
              No
            </label>
          </div>
        </fieldset>

        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Detailed Feedback</label>
          <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-[#281859] focus:border-[#281859] active:border-[#281859]" placeholder="Leave a comment..." />
        </div>

        <button type="submit" class="bg-blue-700 text-white font-medium rounded-lg px-4 py-2.5">Submit</button>
      </form >

    </section>
  );
}
