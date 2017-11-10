import { combineReducers } from 'redux';
import { authState } from '../components/pages/AuthPage/auth.state';

const rootReducer = combineReducers({
  authState,
});

export default rootReducer;
