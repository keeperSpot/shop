import React from "react";

export const CheckboxInput = () =>{
  return(
    <div className=' mb-6 mt-5'>
      <div className='md:w-1/3' />
      <label className='md:w-2/3 block text-gray-500 font-bold' htmlFor='checkbox'>
        <input className='mr-2 leading-tight' type='checkbox' id='checkbox' />
        <span className='text-sm'>
          Send me your newsletter!
        </span>
      </label>
    </div>
  );
}