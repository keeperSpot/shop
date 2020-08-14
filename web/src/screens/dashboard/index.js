import React from 'react';

import { GraphComponent } from "../../components/graphComponent";
import { GlobalData } from "../../components/globalDataComponent";

import 'App.css';
import { ProductList } from "./productlist";

export const DashBoardComponent = () => (
  <div className='flex-row p-6 mx-auto'>
    <div className='bg-white w-full rounded '>
      <div className='grid grid-cols-2 md:grid-cols-4'>
        <div className='p-3 m-3 bg-gray-300 rounded'>
          <p>
            <span className='text-lg'> 10788</span>
            {' '}
            mbps/s
            {' '}
          </p>
        </div>
        <div className='p-3 m-3 bg-gray-300 rounded '>
          <p>
            <span className='text-lg'> 10788</span>
            {' '}
            mbps/s
            {' '}
          </p>
        </div>
        <div className='p-3 m-3 bg-gray-300 rounded'>
          <p>
            <span className='text-lg'> 10788</span>
            {' '}
            mbps
            {' '}
          </p>
        </div>
        <div className='p-3 m-3 bg-gray-300 rounded '>
          <p>
            <span className='text-lg'> 10788</span>
            {' '}
            mbps/s
            {' '}
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 '>
        <div className=''><GraphComponent /></div>
        <div className='mx-auto'><GlobalData /></div>
      </div>
      <ProductList />
    </div>
  </div>
);
