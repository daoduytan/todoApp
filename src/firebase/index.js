import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBEk1pgn53SK75WF--GGIVOtsjrHMTZ95o",
  authDomain: "todoapp-bb3f0.firebaseapp.com",
  databaseURL: "https://todoapp-bb3f0.firebaseio.com",
  projectId: "todoapp-bb3f0",
  storageBucket: "todoapp-bb3f0.appspot.com",
  messagingSenderId: "307521268904"
};

export const firebaseApp = firebase.initializeApp(config);

// export const db = firebaseApp.database();
// export const auth = firebaseApp.auth();

// export const storageKey = 'KEY_FOR_LOCAL_STORAGE';

// export const isAuth = () => {
//   return !!auth.currentUser || !!localStorage.getItem(storageKey);
// }