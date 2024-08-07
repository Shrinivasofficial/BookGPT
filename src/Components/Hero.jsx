import React from 'react';

export const Hero = () => {
  return (
    <div className='mt-16 px-4 sm:px-8 md:px-12 lg:px-16'>
      <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-chocolate-400 mb-4'>
        Book Bot - Your Short Book Reviewer
      </h1>
      <p className='text-lg text-gray-400 font-normal lg:text-xl py-2'>
        Prompt the book name you want to know, Just read the summary of the book. We extract the fresh juice out of that fruit for you.
      </p>
      <button className='mt-6 px-6 py-3 border border-chocolate-400 bg-chocolate-400 text-white rounded-lg'>
        Chat Now
      </button>
     
    </div>
  );
};
