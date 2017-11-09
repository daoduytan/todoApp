import { firebaseApp } from '../../../firebase';
import { LOGIN, LOGOUT } from '../../../types';

// Action login
export const submit = data => async dispatch => {
  await dispatch({ type: LOGIN.LOADING });

  // firebase signin code 1
  try {
    await firebaseApp.auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(user => {
        localStorage.uid = user.uid;
        dispatch(loginSuccess(user))
      });
  } catch (err) {
    dispatch(loginFail(err))
  }

  // firebase signin code 2
  // firebaseApp.auth()
  //   .signInWithEmailAndPassword(data.email, data.password)
  //   .then(user => {
  //     localStorage.uid = user.uid;
  //     dispatch(loginSuccess(user))
  //   })
  //   .catch(err => dispatch(loginFail(err)))
};

export const resetMessage = () => ({
  type: LOGIN.RESET
})

const loginSuccess = (user) => ({
  type: LOGIN.SUCCESS,
  user
})

const loginFail = (err) => ({
  type: LOGIN.FAIL,
  error: err.message
})

export const logout = () => dispatch => {
  firebaseApp.auth()
    .signOut().then(() => {
      localStorage.removeItem('uid');
      dispatch({ type: LOGOUT })
    });
}

// Reducer login
const initialState = {
  user: null,
  isAuth: null,
  message: '',
  loading: false
}

const loginState = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN.LOADING:
      return { ...state, loading: true }
    case LOGIN.SUCCESS:
      return { ...state, user: action.user, isAuth: localStorage.uid, loading: false, };
    case LOGIN.FAIL:
      return { ...state, message: action.error, loading: false }
    case LOGIN.RESET:
      return { ...state, message: '' }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export default loginState;