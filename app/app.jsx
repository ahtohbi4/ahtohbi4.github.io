/**
 * The main entry for the app.
 */
import React from 'react';
import {render} from 'react-dom';

import Routes from './resources/routes.jsx';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

render(
    <Provider store={store}>
        {Routes}
    </Provider>,
    document.getElementById('app')
);
