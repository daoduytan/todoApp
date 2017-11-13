import { LOGIN, SIGNUP, LOGOUT, ADDNEW } from '../../../types';

// auth reducer
const initialState = {
  user: null,
  projects: []
};

export const authState = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP.SUCCESS:
      return { ...state, user: action.user, loading: false };
    case LOGIN.SUCCESS:
      return { ...state, user: action.user };
    case LOGOUT:
      return initialState;
    case 'load_project':
      return { ...state, projects: action.projects }
    default:
      return state;
  }
}



