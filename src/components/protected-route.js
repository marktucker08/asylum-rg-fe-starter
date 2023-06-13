import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { Route } from 'react-router-dom';

const loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';

export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div className="page-layout">
          <div className="loader">
            <img src={loadingImg} alt="Loading..." />
          </div>
        </div>
      ),
    })}
    {...args}
  />
);
