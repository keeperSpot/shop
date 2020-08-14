import React from "react";

export const GridCard = ({ product }) => {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='w-full' src='https://upload.wikimedia.org/wikipedia/commons/3/34/Diskflaskor.JPG' alt='Sunset in the mountains' />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{product.name}</div>
        <p className='text-gray-700 text-base'>
          <span className='text-xl'>
            {product.inStock}
            {' '}
          </span>
          {' '}
          in Stock
        </p>
        <p className='text-gray-700 text-3xl'>
          {product.price }
          <span className='text-base'> only </span>
        </p>
        <p className='text-gray-700 text-base'>
          {product.details}
          {/* {product.details} <span><Icon color='#fff' size={25} name='google' /></span> */}
        </p>
      </div>
      <div className='px-6 py-4'>
        <span
          className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #photography
        </span>
        <span
          className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
          #travel
        </span>
        <span
          className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
          #winter
        </span>
      </div>
    </div>
  );
}