import React from "react";

export const CheckboxInput = () =>{
  return(
    <div className='md:flex md:items-center mb-6'>
      <div className='md:w-1/3' />
      <label className='md:w-2/3 block text-gray-500 font-bold' htmlFor='checkbox'>
        <input className='mr-2 leading-tight' type='checkbox' id='checkbox' />
      </label>
      <span className='text-sm'>
        Send me your newsletter!
      </span>
    </div>
  );
}