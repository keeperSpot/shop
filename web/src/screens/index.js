import React from 'react';

import { Link } from '@reach/router';
import { NavbarComponent } from 'components/navbar';
import { LeftNavbarComponent } from "../components/leftNavbar";
import { DashBoardComponent } from "./dashboard";

import 'App.css';

export const MainBoardScreen = () => (
  <div className='w-100 h-100'>
    {/* <NavbarComponent /> */}
    {/* <div className='flex'> */}
    <LeftNavbarComponent />
    {/*  <DashBoardComponent /> */}
    {/* </div> */}
  </div>
);
