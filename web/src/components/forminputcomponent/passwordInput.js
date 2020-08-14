import React from "react";

export const PasswordInput = () =>{
  return(
    <div className='m-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
        Password
        <input
          className='w-full py-2 px-3 text-gray-700 mb-3 leading-tight no-outline '
          id='password'
          type='password'
          placeholder='*************' />
      </label>
      <p className='text-gray-500 text-xs italic'>Please choose a password.</p>
    </div>
  );
}
