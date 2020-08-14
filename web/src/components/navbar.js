import React from 'react';

export const NavbarComponent = () => {
  const isAuthenticated=false;
  const image=null;
  console.log("in the navbar ");
  return (
    <div>
      <nav className='flex items-center justify-between flex-wrap bg-white px-4 py-4'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <span className='font-semibold text-xl text-blue-900 tracking-tight'>Keeper Spot </span>
        </div>
        <div className=' flex justify-end item-center pr-12'>
          <a
            href='#responsive-header'
            className=' mt-4 text-base d-none d-md-block
              bg-blue-900 p-2 rounded-full  text-white   hover:text-blue-500 mr-4'>
            See Stats
          </a>
          <a
            href='#responsive-header'
            className=' mt-4 d-none d-md-block text-base bg-blue-900 p-2 rounded-full text-white
            hover:text-blue-500 mr-4'>
            Examples
          </a>
          <a
            href='https://google.com'
            className='text-blue-500 hover:text-white focus:text-white rounded-full '
          >
            <img
              className='block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 rounded-full'
              src={isAuthenticated ? image : 'https://randomuser.me/api/portraits/women/17.jpg'}
              style={{ height: '4rem', width: '4rem' }}
              alt="Woman's Face" />
          </a>
        </div>
      </nav>
    </div>
  );
};
