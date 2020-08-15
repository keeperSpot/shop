import React from "react";

export const PriceInput = () => {
  return(
    <div className='mb-4 m-2'>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='price'>
        Price
      </label>
      <div className='mt-1 relative rounded-md shadow-sm'>

        <input
          id='price'
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          placeholder='0.00' />
        <div className='absolute inset-y-0 right-0 flex items-center'>
          <select
            aria-label='Currency'
            className='form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5'>
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
}