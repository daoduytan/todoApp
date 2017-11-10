import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseApp } from '../../../firebase';
import { logout } from '../AuthPage/LoginPage/login.state';
import Navigation from '../../navigation';

const HomePage = ({ logout }) => (<div style={{ paddingTop: '60px' }}>
  <Navigation />
  <div>

  </div>
</div>);

HomePage.propTypes = {
  logout: PropTypes.func
}

export default connect(null, { logout })(HomePage);