import React from 'react';

import { Link } from '@reach/router';
import { NavbarComponent } from 'components/navbar';
import { GraphComponent } from "../../components/graphComponent";
import { GlobalData } from "../../components/globalDataComponent";

import 'App.css';

export const DashBoardComponent = () => (
  <div className='flex-row p-6'>
    <h1 className='text-white'>DASHBOARD</h1>
    <div className='bg-white  rounded '>
      <div className='flex justify-between '>
        <div className='p-12 px-32 m-3 bg-gray-300 rounded'>
          <p>
            <span className='text-lg'> 10788</span>
            {' '}
            mbps/s
            {' '}
          </p>
        </div>
        <div className='p-12 px-32 m-3 bg-gray-300 rounded '>
          <p>
            <span className='text-lg'> 10788</span>
            {' '}
            mbps/s
            {' '}
          </p>
        </div>
        <div className='p-12 px-32 m-3 bg-gray-300 rounded'>
          <p>
            <span className='text-lg'> 10788</span>
            {' '}
            mbps
            {' '}
          </p>
        </div>
        <div className='p-12 px-32 m-3 bg-gray-300 rounded '>
          <p>
            <span className='text-lg'> 10788</span>
            {' '}
            mbps/s
            {' '}
          </p>
        </div>
      </div>
      <div className=' flex flex-grow'>
        <div className='flex-grow m-2 '><GraphComponent /></div>
        <div className='flex m-2 '><GlobalData /></div>
      </div>
    </div>
  </div>
);
