import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {ReduxRouter} from 'redux-router';

// DEVTOOLS
import DevTools from './dev/DevTools';

// Store
import configureStore from './store';

// Containers
import App from './containers/App';

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <ReduxRouter>
        <Route path="/" component={App} />
      </ReduxRouter>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('root')
);
