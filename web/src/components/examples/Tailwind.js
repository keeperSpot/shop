import React from 'react';

import { useUser } from 'common/hooks/auth';

export const Tailwind = () => {
  const { user, isAuthenticated } = useUser();

  return (
    <div>
      <h3>
        With Tailwind CSS
      </h3>
      <div className='max-w-sm bg-white shadow-lg rounded-lg overflow-hidden'>
        <div className='sm:flex sm:items-center px-6 py-4'>
          <img
            className='block mx-auto sm:mx-0 sm:flex-shrink-0 h-24 rounded-full'
            src={isAuthenticated ? user.image : 'https://randomuser.me/api/portraits/women/17.jpg'}
            style={{ height: '6rem', width: '6rem' }}
            alt="Woman's Face" />
          <div className='mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left'>
            <p
              className='text-xl leading-tight'>
              {isAuthenticated ? `${user.firstName} ${user.lastName}` : 'Erin Lindford'}
            </p>
            <p className='text-sm leading-tight text-gray-600'>Customer Support Specialist</p>
            <div className='mt-4'>
              <button
                type='button'
                className='text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 text-xs font-semibold rounded-full px-4 py-1 leading-normal'>
                Message 
                {' '}
                {user.email}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
