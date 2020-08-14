import React, { useState } from 'react';

export const LeftNavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn=true;
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='flex-row justify-center w-32 h-screen text-blue-900  bg-white d-none md-d-block '>
      <ul className='list-reset '>
        <li>
          <a
            href='https://google.com'
            className='block p-4 text-grey-darker font-bold border-purple hover:bg-grey-lighter border-r-4 '>
            Dashboard
          </a>
        </li>
        <li>
          <a
            href='https://google.com'
            className='block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4'>
            About
            us
          </a>
        </li>
        <li>
          <a
            href='https://google.com'
            className='block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4'>
            Services
          </a>
        </li>
        <li>
          <a
            href='https://google.com'
            className='block p-4 text-grey-darker font-bold border-grey-lighter hover:border-purple-light hover:bg-grey-lighter border-r-4'>
            Contact
            us
          </a>
        </li>
      </ul>
    </div>
  );
};
