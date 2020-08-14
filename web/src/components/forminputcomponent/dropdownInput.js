import React from "react";

export const DropdownInput = () => {
  return(
    <div className='mr-8 ml-4'>
      <div className='relative'>
        <a href='https://google.com' className='bg-teal p-3 rounded text-white shadow-inner w-full'>
          <span className='float-left'>Show options</span>
        </a>
        <div className='rounded shadow-md my-2 relative pin-t pin-l'>
          <ul className='list-reset'>
            <li className='p-2'><input className='border-2 rounded h-8 w-full' /></li>
            <li><p className='p-2 block text-black hover:bg-grey-light cursor-pointer'>USA</p></li>
            <li><p className='p-2 block text-black hover:bg-grey-light cursor-pointer'>Montenegro</p></li>
          </ul>
        </div>
      </div>
    </div>
  );
}