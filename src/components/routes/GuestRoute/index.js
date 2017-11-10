import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => !isAuth ? <Component {...props} /> : <Redirect to="/" />} />
  );
}

const mapStateToProps = ({ authState }) => {
  if(localStorage.uid) {
    return ({ isAuth: localStorage.uid })
  }
  return ({
    isAuth: authState.user
  })
}

export default connect(mapStateToProps)(GuestRoute);
