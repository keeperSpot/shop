import React from 'react';
import { Router } from '@reach/router';
import { publicRoutes } from 'constants/routes.web';


export const PublicRoutes = () => {
  return (
    <Router>
      {publicRoutes.map(Route=>(<Route.Component path={Route.to} />))}
    </Router>
  );
};

