import React,{ useState } from 'react';
import { SearchBar } from './searchBar';

export const DropDown = ({ payload,qp,callBack }) => {// for is reserved so _for
  const [display,setDisplay]=useState(false);
  const [options,setOptions]=useState(payload);
  const [selectedOp,setSelectedOp]=useState('none');
  const toggleDisplay = () =>{
    setDisplay(!display)
  }
  const selectEventHandle = (option) => {
    setSelectedOp(option);
    toggleDisplay();
    callBack(option);
  }
  return(
    <div className='relative inline-block text-left '>
      <div>
        <span className='rounded-md shadow-sm'>
          <button type='button' className='inline-flex justify-center w-56 rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150' id='options-menu' aria-haspopup='true' aria-expanded='true' onClick={()=>toggleDisplay()}>
            {selectedOp==='none'?'Options':selectedOp}
            <svg className='-mr-1 ml-2 h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
            </svg>
          </button>
        </span>
      </div>
      <div className='origin-top-right right-0 mt-2 w-56 rounded-md shadow-lg' style={{ display:display?'block':'none' }}>
        <div className='rounded-md bg-white shadow-xs'>
          <div className='py-1' role='menu' aria-orientation='vertical' aria-labelledby='options-menu'>
            <SearchBar _for='dropDown' payload={payload} callBack={x=>{setOptions(x);console.log(x)}} qp={qp} />
            {
              options.map(x=>{
                return(
                  <a href='#!' className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900' role='menuitem' onClick={()=>{selectEventHandle(x[qp])}}>{x[qp]}</a>
                )
              })
          }
        
          </div>
        </div>
      </div>
    </div>
  )
};
