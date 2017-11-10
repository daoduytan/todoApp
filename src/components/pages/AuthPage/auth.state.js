import { LOGIN, SIGNUP, LOGOUT } from '../../../types';

// auth reducer
const initialState = {
  user: null,
};

export const authState = (state = initialState, action) => {
  switch (action.type) {
    // case LOADING:
    //   return { ...state, loading: true }
    case SIGNUP.SUCCESS:
      return { ...state, user: action.user, loading: false };
    // case SIGNUP.FAIL:
    //   return { ...state, loading: false }
    // case LOGIN.LOADING:
    //   return { ...state }
    case LOGIN.SUCCESS:
      return { ...state, user: action.user };
    // case LOGIN.FAIL:
    //   return { ...state, loading: false }
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

// export default authState;

// const messageInitial = {
//   // login: null,
//   signup: null
// }

// export const messageState = (state = messageInitial , action) => {
//   switch(action.type) {
//     // case LOGIN.FAIL:
//     //   return { ...state, login: action.error }
//     case SIGNUP.FAIL:
//       return { ...state, signup: action.error }
//     default:
//       return state;
//   }
// }



