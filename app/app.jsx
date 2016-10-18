/**
 * The main entry for the app.
 */
import React from 'react';
import {render} from 'react-dom';

import Routes from './resources/routes.jsx';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import DevTools from './utils/DevTools';

import reducers from './reducers';
const store = createStore(reducers, DevTools.instrument());

render(
    <Provider store={store}>
        {Routes}
    </Provider>,
    document.getElementById('app')
);
