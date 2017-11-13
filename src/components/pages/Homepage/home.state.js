import { firebaseApp } from "../../../firebase/index";
import { locales } from "validator/lib/isPostalCode";

export const loadProject = () => dispatch => {
  const uid  = localStorage.getItem('uid')
  firebaseApp.database().ref(`member/${uid}/projects`).on('value', (snapshot) => {
    console.log(snapshot.val())
    if (snapshot.val() === null) {
      return dispatch({
        type: 'load_project',
        projects: []
      })
    } else {
    const arr = Object.entries(snapshot.val()).map(e => Object.assign(e[1], { key: e[0] }));
        return dispatch({
          type: 'load_project',
          projects: arr
        })
    }
  })
}

export const deleteCard = (id) => dispatch => {
  const uid  = localStorage.getItem('uid')
  firebaseApp.database().ref(`member/${uid}/projects`).child(id).remove();
}

export const editCard = (project) => dispatch => {
  const uid  = localStorage.getItem('uid')
  firebaseApp.database().ref(`member/${uid}/projects/`).child(project.key).update(project);
}

export const addTask = (id, task) => dispatch => {
  const uid = localStorage.getItem('uid');
  firebaseApp.database().ref(`member/${uid}/projects/${id}/tasks`).push(task);
}