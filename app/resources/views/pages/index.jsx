import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Layout from '../blocks/layout/layout.jsx';

import Experience from './experience/experience.jsx';
import Main from './main.jsx';
import PageNotFound from './page-not-found/page-not-found.jsx';
import Projects from './projects/projects.jsx';

render(
    <Router history={hashHistory}>
        <Route path="/">
            <Route component={Layout}>
                <IndexRoute component={Main}/>

                <Route path="experience/" component={Experience}/>
                <Route path="projects/" component={Projects}/>

                <Route path="*" component={PageNotFound}/>
            </Route>
        </Route>
    </Router>,
    document.getElementById('root')
);
