import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => !isAuth ? <Component {...props} /> : <Redirect to="/" />} />
  );
}

const mapStateToProps = ({ loginState }) => {
  if(localStorage.uid) {
    return ({ isAuth: localStorage.uid })
  }
  return ({
    isAuth: loginState.isAuth
  })
}

export default connect(mapStateToProps)(GuestRoute);
