import React from 'react';
import { Router } from '@reach/router';
import { publicRoutes } from 'constants/routes.web';
import { NavbarComponent } from "../components/navbar";


export const PublicRoutes = () => {
  return (
    <>
      <NavbarComponent {...{ publicRoutes }} />
      <Router>
        {publicRoutes.map(Route=>(<Route.Component path={Route.to} />))}
      </Router>
    </>
  );
};

