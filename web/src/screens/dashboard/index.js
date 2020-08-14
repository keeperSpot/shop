import React from 'react';

import { GraphComponent } from "../../components/graphComponent";
import { GlobalData } from "../../components/globalDataComponent";

import { ProductList } from "./productlist";

export const DashBoardComponent = () => (
  <>
    <div className='flex-row p-6'>
      <h1 className=''>DASHBOARD</h1>
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
      <div className='grid grid-cols-1 md:flex '>
        <div className='md:w-2/3'><GraphComponent /></div>
        <div className='mx-auto md:w-1/3'><GlobalData /></div>
      </div>
      <ProductList />
    </div>
  </>
);
