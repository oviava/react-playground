import {compose, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createHashHistory from 'history/lib/createHashHistory';
import {reduxReactRouter} from 'redux-router';

// TODO: remove devtools and logging middleware in prod
import DevTools from '../dev/DevTools';
// import logger from '../loggerMiddleware';

import rootReducer from '../reducers';

const createAppStore = compose(
  reduxReactRouter({createHistory: createHashHistory}),
  // applyMiddleware(thunkMiddleware, logger),
  applyMiddleware(thunkMiddleware),
  // TODO: remove devtools in prod
  DevTools.instrument()
)(createStore);


export default function configureStore(initialState) {
  const store = createAppStore(rootReducer, initialState);

  // TODO: remove hot reloading in prod
  if (module.hot) {
  // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
