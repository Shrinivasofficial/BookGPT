import React from 'react';

export const Footer = () => {
  return (
    <div>
      <footer className='rounded-lg m-2'>
        <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center'>
            <span>2024 </span>
            <a href='/' className='hover:underline'>BookReviewer</a>. All Rights Reserved.
          </span>
          <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0'>
            <li>
              <a href='/' className='hover:underline mr-4 md:mr-6'>About</a>
            </li>
            <li>
              <a href='/' className='hover:underline mr-4 md:mr-6'>Privacy Policy</a>
            </li>
            <li>
              <a href='/' className='hover:underline mr-4 md:mr-6'>Community</a>
            </li>
            <li>
              <a href='/' className='hover:underline mr-4 md:mr-6'>Contact</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};
