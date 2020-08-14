import React from 'react';

import { Link } from '@reach/router';
import { NavbarComponent } from 'components/navbar';
import { LeftNavbarComponent } from "../components/leftNavbar";
import { DashBoardComponent } from "./dashboard";

import 'App.css';
import { DropdownInput } from "../components/forminputcomponent/dropdownInput";

export const MainBoardScreen = () => (
  <div>
    <div>
      <header className='bg-white shadow'>
        <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold leading-tight text-gray-900'>
            Dashboard
          </h1>
        </div>
      </header>
    </div>
    <DashBoardComponent />
  </div>
);
