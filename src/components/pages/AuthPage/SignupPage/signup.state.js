import { SIGNUP } from '../../../../types';

export const signup = user => dispatch => {
  const { uid } = user;
  localStorage.uid = uid;
  dispatch({
    type: SIGNUP.SUCCESS,
    user
  })
};


