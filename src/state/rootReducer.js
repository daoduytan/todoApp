import { combineReducers } from 'redux';
import loginState from '../components/pages/LoginPage/login.state';
import signupState from '../components/pages/SignupPage/signup.state';

const rootReducer = combineReducers({
  loginState,
  signupState
});

export default rootReducer;
