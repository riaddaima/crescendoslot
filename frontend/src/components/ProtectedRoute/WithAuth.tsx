import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const WithAuth = (props: RouteProps) => {

  const [cookies, ] = useCookies(['jwt-token']);
  const { children: Children, ...rest } = props;

  const isAuthenticated = (): Boolean => {
    if (cookies['jwt-token']) return true;
    return false;
  }
  
  return (
    <Route
      {...rest}
      render={(routeProps) => (isAuthenticated() ? (
        <Route {...routeProps}>{Children}</Route>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: routeProps.location },
          }}
        />
      ))}
    />
  );
};

export default WithAuth;