import React,{ useState } from "react";
import { MaterialCommunityIcons } from 'react-web-vector-icons';

export const DropdownInput = ({ options,value,setValue,placeholder }) => {
  const [isOpen,setIsOpen] = useState(false)
  return(
    <div className='m-4'>
      <div className='relative'>
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          onKeyPress={()=>{}}
          className='rounded my-2 px-2 w-full flex justify-between items-center bg-gray-200'
          onClick={()=>{setIsOpen(!isOpen)}}>
          <text>{value|| placeholder ||'Select'}</text>
          <MaterialCommunityIcons className='bg-gray-600' size={20} name='menu-down' />
        </div>
        <div className={`${isOpen?'':'hidden'} rounded shadow-md my-2 relative pin-t pin-l`}>
          <ul className='list-reset'>
            <input className=' h-8 w-full no-outline px-2' placeholder='Search' />
            {(options||[]).map((option=>(
              <li>
                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                <p
                  onKeyPress={()=>{}}
                  onClick={()=>{setIsOpen(false); setValue(option.value)}}
                  className='p-2 block text-black hover:bg-grey-light cursor-pointer'
              >
                  {option.label}
                </p>
              </li>
            )))}
          </ul>
        </div>
      </div>
    </div>
  );
}
