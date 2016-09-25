import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import App from '../blocks/app/app.jsx';

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>,
    document.getElementById('root')
);
