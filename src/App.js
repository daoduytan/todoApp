import React from 'react';


// import components
import Homepage from './components/pages/Homepage';
import LoginPage from './components/pages/AuthPage/LoginPage';
import SignupPage from './components/pages/AuthPage/SignupPage';
import AddNewPage from './components/pages/AddNewPage';
import UserRoute from './components/routes/UserRouter';
import GuestRoute from './components/routes/GuestRoute';

const App = ({ location, isAuth }) => (<div>
    <GuestRoute path="/login" location={location} exact component={LoginPage} />
    <GuestRoute path="/signup" location={location} exact component={SignupPage} />
    <UserRoute path="/" exact location={location} component={Homepage} />
    <UserRoute path="/add_new" exact location={location} component={AddNewPage} />
  </div>);

export default App;
