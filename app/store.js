import { createStore } from 'redux';

import reducers from './reducers';

/* eslint-disable no-underscore-dangle, no-undef */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

export default store;
