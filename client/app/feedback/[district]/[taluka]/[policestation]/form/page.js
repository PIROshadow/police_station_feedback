'use client'

import StarRating from 'react-star-rating-component';
import React, { useRef, useState } from 'react';

export default function PoliceStationForm({ params }) {
  console.log("Policestation:", params.district, params.taluka, params.policestation, params.policestationId);
  const [rating1, setRating1] = useState(0);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(0);
  const [rating4, setRating4] = useState(0);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [satisfaction, setSatisfaction] = useState('');

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

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSatisfactionChange = (e) => {
    setSatisfaction(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', {
      name,
      mobile,
      rating1,
      rating2,
      rating3,
      rating4,
      satisfaction,
      message
    });

    const feedbackData = {
      name: name,
      mobile_no: mobile,
      areyousatisfied: satisfaction === 'yes',
      rating: [rating1, rating2, rating3, rating4],
      longfeedback: message,
    };
  
    fetch('http://192.168.59.200:5000/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedbackData),
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log('Feedback submitted:', data);
  
        setName('');
        setMobile('');
        setRating1(0);
        setRating2(0);
        setRating3(0);
        setRating4(0);
        setMessage('');
        setSatisfaction('');
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
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
      <form onSubmit={handleSubmit}>
        <h2 class="text-lg font-semibold mb-3">Your Information</h2>

        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[#281859] focus:border-[#281859] active:border-[#281859] block w-full p-2.5"
            placeholder="Jayesh Patel"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            value={mobile}
            onChange={handleMobileChange}
            className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-[#281859] focus:border-[#281859] active:border-[#281859] block w-full p-2.5"
            placeholder="1245789630"
            required
          />
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
          <legend className="sr-only">Were you satisfied with the service?</legend>
          <label>Were you satisfied with the service?</label>
          <div className="flex items-center mb-4">
            <input
              id="country-option-1"
              type="radio"
              name="countries"
              value="yes"
              checked={satisfaction === 'yes'}
              onChange={handleSatisfactionChange}
              className="w-4 h-4 border-gray-300"
            />
            <label htmlFor="country-option-1" className="block ml-2 text-sm font-medium text-gray-900">
              Yes
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="country-option-2"
              type="radio"
              name="countries"
              value="no"
              checked={satisfaction === 'no'}
              onChange={handleSatisfactionChange}
              className="w-4 h-4 border-gray-300"
            />
            <label htmlFor="country-option-2" className="block ml-2 text-sm font-medium text-gray-900">
              No
            </label>
          </div>
        </fieldset>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Detailed Feedback</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-[#281859] focus:border-[#281859] active:border-[#281859]"
            placeholder="Leave a comment..."
          />
        </div>

        <button type="submit" class="bg-blue-700 text-white font-medium rounded-lg px-4 py-2.5">Submit</button>
      </form >

    </section>
  );
}
