import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleChatNowClick = () => {
    navigate('/chat'); // Navigate to the chat page
  };

  return (
    <div className='mt-16 px-4 sm:px-8 md:px-12 lg:px-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-chocolate-400 mb-4'>
        Book Bot - Your Short Book Reviewer
      </h1>
      <p className='text-lg text-gray-400 font-normal lg:text-xl py-2'>
        Prompt the book name you want to know, Just read the summary of the book. We extract the fresh juice out of that fruit for you.
      </p>
      <button
        className='mt-6 px-6 py-3 border border-chocolate-400 bg-chocolate-400 text-white rounded-lg'
        onClick={handleChatNowClick}
      >
        Chat Now
      </button>
     
      <div className='mt-16 sm:hidden'>
        <h2 className='text-3xl font-bold'>Samples</h2>
        <label htmlFor='tabs' className='sr-only'>
          Select Your Genre
        </label>
        <select
          id='tabs'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-chocolate-700 focus:border-chocolate-400 w-full p-2.5'
        >
          <option>Fiction</option>
          <option>Non-Fiction</option>
          <option>Thriller</option>
          <option>Self-Help</option>
          <option>Love</option>
          <option>Health</option>
        </select>
      </div>
     
      <div className='mt-12'>
        {/* Add additional content or elements here */}
      </div>
    </div>
  );
};

export default Hero;