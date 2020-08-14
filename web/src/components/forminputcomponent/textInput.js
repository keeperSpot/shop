import React from "react";

export const TextInput = ({ labelText }) =>{
  return(
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={labelText}>
        {labelText}
      </label>
      <input
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        id={labelText}
        type='text'
        placeholder={labelText} />
    </div>
  );
}