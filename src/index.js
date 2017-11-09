import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './state/store';

// import { onLogined } from './components/pages/Login/login.state';

import { LOGIN } from './types';

// import semantic css
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// firebase.auth().onAuthStateChanged(function(user) {
//   if (!user) {
//     // store.dispatch(onLogined(user));
//     localStorage.removeItem('uid')
//   } else {
//     // No user is signed in.
//     // console.log(localStorage.userId)
//   }
// });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
