import React, { useState,useEffect } from 'react';
import KeeperLogo from 'assets/ic_launcher-web.png'
import { MaterialCommunityIcons } from 'react-web-vector-icons';
import { Link } from '@reach/router';
import { SearchBar } from './elms/searchBar'

export const LeftNavbarComponent = ({ routes }) => {
  const { pathname } = window.location;
  const [open, setOpen] = useState(pathname);
  const isLoggedIn=true;
  // let tmpRoutes=routes;
  const [sideBarLinks,setsideBarLinks]=useState(routes);
  return (
    <div className='flex-column justify-center  h-screen bg-gray-300 p-3 '>
      <div className='flex flex-row items-center my-2'>
        <img src={KeeperLogo} className='w-12 h-12 m-2' alt='logo' />
        <div className='flex-column align-start'>
          <p
            className='text-black text-xl font-bold '
            >
            keeper
            <text className='text-gray-600 text-md font-normal '>Spot</text>
          </p>
          <text className='text-gray text-xs'>Product of Tweak InCorp Pvt. Ltd.</text>
        </div>
      </div>
      <div />
      <div className='px-2 my-2 mt-4 flex items-center'>
        <img
          className='block mx-auto sm:mx-2 sm:flex-shrink-0 h-16 rounded-full'
          src='https://randomuser.me/api/portraits/women/17.jpg'
          style={{ height: '3rem', width: '3rem' }}
          alt="Woman's Face" />
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

      <div className='px-2 justify-center items-center flex'>
        {console.log(routes)}
        <SearchBar
          _for='sideBarLinks'
          payload={routes}  
          callBack={x=>{setsideBarLinks(x)}}
          qp='title' 
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
                  className='mx-2 text-gray-700 font-semibold'
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
