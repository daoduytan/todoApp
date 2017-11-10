import React from 'react';

// import components
import Homepage from './components/pages/Homepage';
import LoginPage from './components/pages/AuthPage/LoginPage';
import SignupPage from './components/pages/AuthPage/SignupPage';
import UserRoute from './components/routes/UserRouter';
import GuestRoute from './components/routes/GuestRoute';


const App = ({ location, isAuth }) => (<div>
    <GuestRoute path="/login" location={location} exact component={LoginPage} />
    <UserRoute path="/" exact location={location} component={Homepage} />
    <GuestRoute path="/signup" location={location} exact component={SignupPage} />
  </div>);

export default App;
