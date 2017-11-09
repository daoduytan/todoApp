import { firebaseApp } from '../../../firebase';
import { SIGNUP } from '../../../types';

// Action signup
export const signup = data => async dispatch => {
  await firebaseApp.auth()
    .createUserWithEmailAndPassword(data.email, data.password)
    .then(user => dispatch(signupSuccess(user)))
    .catch(err => dispatch(signupFail(err)))
};

export const resetMessage = () => ({
  type: SIGNUP.RESET
})

const signupSuccess = (user) => ({
  type: SIGNUP.SUCCESS,
  user
})

const signupFail = (err) => ({
  type: SIGNUP.FAIL,
  error: err.message
})

// Reducer Signup
const initialState = {
  user: null,
  message: ''
}

const loginState = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP.SUCCESS:
      return { ...state, user: action.user };
    case SIGNUP.FAIL:
      return { ...state, message: action.error }
    case SIGNUP.RESET:
      return { ...state, message: '' }
    default:
      return state;
  }
}

export default loginState;