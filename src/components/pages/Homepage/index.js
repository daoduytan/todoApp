import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firebaseApp } from '../../../firebase';
import { logout } from '../LoginPage/login.state';

const HomePage = ({ logout }) => (<div>
  <Button onClick={() => logout()}>Sign out</Button>
  <span>Home page</span>
</div>);

export default connect(null, { logout })(HomePage);