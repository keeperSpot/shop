import React,{ useState } from 'react';

export const SideBar = () =>{
  const [hamburger,setHamburger]=useState(0);
  //  const sideNavHeader,sideNavLinks;
  const sideNavHeader=(hamburger)?"min-h-screen":"md:min-h-0";// i dont know why i am using this, i convert it to const bc "'sideNavHeader' is never reassigned. Use 'const' instead"
  const sideNavLinks=(hamburger)?"sm:block":"md:block";// this too
  return(
    <nav className='col-span-4 sm:col-span-4 md:col-span-1 lg:col-span-1  '>
      <div className={`bg-gray-800 relative  md:min-h-screen ${sideNavHeader}`}>
        <div className='flex items-center justify-between h-16'>
          <div className='px-2 pt-2 pb-3 sm:px-3'>
            <img className='h-8 w-8' src='https://tailwindui.com/img/logos/workflow-mark-on-dark.svg' alt='Workflow logo' />
          </div>
          <div className='mr-2 flex md:hidden'>
           
            <button onClick={()=>{setHamburger(!hamburger)}} className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white' type='button'>
              <svg className='block h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
              <svg className='hidden h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
        </div>
        <div className={`hidden ${sideNavLinks}`}>
          <div className='px-2 pt-2 pb-3 sm:px-3'>
            <a href='#!' className='block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700'>Dashboard</a>
            <a href='#!' className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>Projects</a>
            <a href='#!' className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>Calendar</a>
            <a href='#!' className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>Documents</a>
            <a href='#!' className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>Reports</a>
          </div>
          <div className='  border-gray-700 bg-gray-700 absolute bottom-0 inset-x-0 border-t'>
            <div className=' pt-4 pb-3 flex items-center px-5'>
              <div className='flex-shrink-0'>
                <img className='h-10 w-10 rounded-full' src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' />
              </div>
              <div className='ml-3 '>
                <div className='text-base font-medium leading-none text-white'>Tom Cook</div>
                <div className='mt-1 text-sm font-medium leading-none text-gray-400'>tom@example.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>


  )
}