import { firebaseApp } from "../../../firebase/index";

export const loadProject = () => dispatch => {
  const uid  = localStorage.getItem('uid')
  firebaseApp.database().ref(`member/${uid}/projects`).on('value', (snapshot) => {
    // console.log(snapshot.val())
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

export const changeStatus = (status, project) => dispatch => {
  const uid  = localStorage.getItem('uid');
  // console.log(33123)
  const newProject = { ...project,  status }
  // console.log(3123123)
  firebaseApp.database().ref(`member/${uid}/projects/`).child(project.key).update(newProject);
}

export const addTask = (task) => dispatch => {
  const uid = localStorage.getItem('uid');
  firebaseApp.database().ref(`member/${uid}/projects/${task.projectId}/tasks`).push(task);
}

export const changeFinishTask = (id, task) => dispatch => {
  const uid = localStorage.getItem('uid');
  firebaseApp.database().ref(`member/${uid}/projects/${id}/tasks`).child(task.key).update(task);
}

export const removeTask = (task) => dispatch => {
  const uid = localStorage.getItem('uid');
  console.log(task.key)
  firebaseApp.database().ref(`member/${uid}/projects/${task.projectId}/tasks`).child(task.key).remove();
}