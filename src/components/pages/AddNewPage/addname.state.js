import { firebaseApp } from '../../../firebase';
import { ADDNEW } from '../../../types';

export const addNewProject = (data) => dispatch => {
  const uid = localStorage.getItem('uid');
  firebaseApp.database().ref(`member/${uid}/projects`).push(data);
}