import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const UserRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <div>
      <Route {...rest} render={props => isAuth ? <Component {...props} /> : <Redirect to="/login" />} />
    </div>
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

export default connect(mapStateToProps)(UserRoute);
