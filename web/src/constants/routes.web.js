import React from 'react';
import { MonorepoIntro } from 'components/examples/MonorepoIntro';
import { MainBoardScreen } from 'screens';
import { DashBoardComponent } from 'screens/dashboard';
import { GroceriesForm } from "../screens/form";

export const navBarRoutes = [
  {
    to:'/',
    title:'Dashboard',
    icon:'home',
    Component:()=><DashBoardComponent />
  },
  {
    to:'/example/',
    title:'Inventory',
    icon:'view-list',
    Component:()=><MainBoardScreen />
  },
  {
    to:'/example/intro/',
    title:'Services',
    icon:'view-list',
    Component:()=><MonorepoIntro />
  },
  {
    to:'/groceriesform/',
    title:'GroceriesForm',
    icon:'view-list',
    Component:()=><GroceriesForm />
  }
]
