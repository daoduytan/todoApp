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

const mapStateToProps = ({ authState }) => {
  if(localStorage.uid) {
    return ({ isAuth: localStorage.uid })
  }
  return ({
    isAuth: authState.user
  })
}

export default connect(mapStateToProps)(UserRoute);
