import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import components
import Navigation from './components/navigation';
import Homepage from './components/pages/Homepage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
// import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRouter';
import GuestRoute from './components/routes/GuestRoute';


const App = ({ location, isAuth }) => (<div>
    <Navigation />
    <GuestRoute path="/login" location={location} exact component={LoginPage} />
    <UserRoute path="/" exact location={location} component={Homepage} />
    <GuestRoute path="/signup" location={location} exact component={SignupPage} />
    {/* <UserRoute path="/dashboard" location={location} exact component={Dashboard} /> */}
  </div>);

// const mapStateToProps = ({ loginState }) => ({
//   isAuth: loginState.user || localStorage.uid
// })

export default App;
