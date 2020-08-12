import React from 'react';
import { Link, Router } from '@reach/router';
import { NavbarComponent } from 'components/navbar';
import { LeftNavbarComponent } from "components/leftNavbar";

import 'App.css';

export const ScreenWrapper = (props) => {
  const { children } = props;
  return(
    <div className='w-100 h-100'>
      {/* <NavbarComponent /> */}
      <div className='flex'>
        <div>
          <LeftNavbarComponent {...props} />
        </div>
        <div className='flex-1'>
          {children}
        </div>
      </div>
    </div>
  )
};
