import React,{ useState } from 'react';
import { Link } from '@reach/router';
import KeeperLogo from "../assets/ic_launcher-web.png";

export const NavbarComponent = ({ publicRoutes }) => {
  const isAuth=false;
  const [toggle,setToggle]=useState(false);
  const { pathname } = window.location;
  const [open, setOpen] = useState(pathname);
  console.log("in the navbar ");
  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center'>
              <div className='flex flex-row items-center my-2 lg:my-2 md:my-0 justify-center'>
                <img src={KeeperLogo} className='w-10 h-10 m-2 ' alt='logo' />
                <div className='flex flex-col align-start md:hidden lg:flex'>
                  <p
                    className='flex-none text-white text-xl font-bold '
                  >
                    keeper
                    <text className='text-gray-300 text-md font-normal '>Spot</text>
                  </p>
                  <text className='text-gray-500 text-xs'>Product of Tweak InCorp Pvt. Ltd.</text>
                </div>
              </div>
              <div className='hidden md:block'>
                {isAuth ? <p className='text-white'>fcukkkk</p>: (
                  <div className='flex ml-24'>
                    {
                      publicRoutes.map(Route=>(
                        <div
                          className={`${open===Route.to?' bg-gray-700 rounded px-2':'px-2'}`}>
                          <Link
                            onClick={()=>{setOpen(Route.to)}}
                            to={Route.to}
                            className='flex items-center'>
                            <div
                              className='mx-12 text-gray-200 font-semibold md:hidden lg:flex'
                              >
                              {Route.title}
                            </div>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
            </div>
            <div className='-mr-2 flex md:hidden'>
              {/* eslint-disable-next-line react/button-has-type */}
              <button
                onClick={()=>setToggle(!toggle)}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white'>

                <svg className='block h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16' />
                </svg>
                <svg className='hidden h-6 w-6' stroke='currentColor' fill='none' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${toggle?'block md:hidden':'hidden md:hidden'}`}>
          {isAuth? (
            <div className='pt-4 pb-3 border-t border-gray-700'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt='' />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium leading-none text-white'>Tom Cook</div>
                  <div className='mt-1 text-sm font-medium leading-none text-gray-400'>tom@example.com</div>
                </div>
              </div>
              <div className='mt-3 px-2 '>
                <a
                  href='https://google.com'
                  className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>
                  Your
                  Profile
                </a>
                <a
                  href='https://google.com'
                  className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>
                  Settings
                </a>
                <a
                  href='https://google.com'
                  className='mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700'>
                  Sign
                  out
                </a>
              </div>
            </div>
          ): (
            <div className='px-2 pt-2 pb-3 sm:px-3'>
              {
                  publicRoutes.map(Route=>(
                    <div
                      className={`${open===Route.to?' bg-gray-700 rounded px-2':'px-2'}`}>
                      <Link
                        onClick={()=>{setOpen(Route.to)}}
                        to={Route.to}
                        className='flex items-center'>
                        <div
                          className='mx-12 text-gray-200 font-semibold md:hidden lg:flex'
                          >
                          {Route.title}
                        </div>
                      </Link>
                    </div>
                  ))
                }
            </div>
          )}

        </div>
      </nav>
    </div>
  );
};
