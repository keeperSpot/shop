import React from "react";

export const TextInput = ({ labelText,placeholder,suggestions, value,setValue,kwargs }) =>{

  return(
    <div className='m-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={labelText}>
        {labelText}
      </label>
      <div className=''>
        <input
          value={value}
          className='w-full  py-2 px-3 text-gray-700 leading-tight focus:border-2 no-outline'
          id={labelText}
          onChange={(e)=> {
            setValue(e.target.value)
          }}
          type='text'
          placeholder={placeholder}
          {...kwargs} />
        <div className={`${value?'':'hidden'} rounded shadow-md my-2 relative pin-t pin-l`}>
          {suggestions?(
            <ul className='list-reset'>
              <input className=' h-8 w-full no-outline px-2' placeholder='Search' />
              {(suggestions||[]).map((option=>(
                <li>
                  {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                  <p
                    onKeyPress={()=>{}}
                    onClick={()=>{setValue(option.value)}}
                    className='p-2 block text-black hover:bg-grey-light cursor-pointer'
              >
                    {option.label}
                  </p>
                </li>
              )))}
            </ul>
          ):null}
        </div>
      </div>
    </div>
  );
}
