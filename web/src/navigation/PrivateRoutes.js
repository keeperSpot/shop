import React from 'react';
import { ScreenWrapper } from 'components/screenWrapper';
import { Router } from '@reach/router';
import { navBarRoutes } from 'constants/routes.web';


export const PrivateRoutes = () => {
  return (
    <ScreenWrapper routes={navBarRoutes}>
      <Router>
        {navBarRoutes.map(Route=>(<Route.Component path={Route.to} />))}
      </Router>
    </ScreenWrapper>
  );
};

