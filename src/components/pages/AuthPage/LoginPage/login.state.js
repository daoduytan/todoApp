import { firebaseApp } from '../../../../firebase';
import { LOGIN, LOGOUT } from '../../../../types';

// Action login
export const submit = user => dispatch => {
  localStorage.uid = user.uid;

  dispatch({
    type: LOGIN.SUCCESS,
    user
  })
};

export const logout = () => dispatch => {
  firebaseApp.auth()
    .signOut().then(() => {
      localStorage.removeItem('uid');
      dispatch({ type: LOGOUT })
    });
}