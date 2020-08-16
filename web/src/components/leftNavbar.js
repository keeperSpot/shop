import React, { useState } from 'react';
import KeeperLogo from 'assets/ic_launcher-web.png';
import { MaterialCommunityIcons } from 'react-web-vector-icons';
import { Link } from '@reach/router';
import { SearchBar } from './elms/searchBar'

export const LeftNavbarComponent = ({ routes }) => {
  const { pathname } = window.location;
  const [open, setOpen] = useState(pathname);
  const [sideBarLinks,setsideBarLinks]=useState(routes);
  return (
    <div className='flex-column justify-center min-h-screen
     h-full bg-gray-300 p-3 md:w-16 lg:w-auto'>
      <div className='flex flex-row items-center my-2 lg:my-2 md:my-0 justify-center'>
        <img src={KeeperLogo} className='w-10 h-10 m-2 ' alt='logo' />
        <div className='flex flex-col align-start md:hidden lg:flex'>
          <p
            className='flex-none text-black text-xl font-bold '
            >
            keeper
            <text className='text-gray-600 text-md font-normal '>Spot</text>
          </p>
          <text className='text-gray text-xs'>Product of Tweak InCorp Pvt. Ltd.</text>
        </div>
      </div>
      <div />
      <div className='md:px-0 lg:px-2 px-2 my-2 mt-4 flex items-center justify-center'>
        <img
          className='block  md:m-0 lg:mx-2 sm:mx-2
          md:h-8 md:w-8 lg:h-12 lg:w-12 sm:flex-shrink-0 h-16 rounded-full'
          src='https://randomuser.me/api/portraits/women/17.jpg'
          alt="Woman's Face" />
        <div className='flex items-center md:hidden lg:flex'>
          <div className='flex flex-col mx-2'>
            <text className='text-lg'>
              Asher Toufeeq
            </text>
            <text className='text-xs text-gray-700'>
              ashertoufeeq@gmail.com
            </text>
          </div>
          <MaterialCommunityIcons
            name='dots-vertical'
            className='bg-gray-700'
            size={25}
        />
        </div>
      </div>

      <div className='px-2 justify-center items-center flex md:hidden lg:flex'>
        <SearchBar
          payload={routes}
          qp='title'
          callBack={x=>{setsideBarLinks(x)}}
        />
      </div>
      <ul className='list-reset'>
        {
          sideBarLinks.map(Route=>(
            <li
              className={`${open===Route.to?'bg-gray-400 rounded px-2':'px-2'}`}>
              <Link
                onClick={()=>{setOpen(Route.to)}}
                to={Route.to}
                className='flex items-center'>
                <MaterialCommunityIcons
                  name={Route.icon}
                  className='bg-gray-700'
                  size={25}
               />
                <div
                  className='mx-2 text-gray-700 font-semibold md:hidden lg:flex'
               >
                  {Route.title}
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
