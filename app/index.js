/**
 * The main entry for the app.
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './resources/routes';
import store from './store';

render(
  <Provider store={store}>
    {Routes}
  </Provider>,
  document.getElementById('app'),
);
