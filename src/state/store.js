import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import localForage from 'localforage'

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

persistStore(store, { blacklist: ['messageState'] })
persistStore(store);

export default store;