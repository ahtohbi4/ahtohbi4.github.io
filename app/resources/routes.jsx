/**
 * The main routing for the app.
 */
import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import Layout from './views/blocks/layout/layout.jsx';

import Experience from './views/pages/experience/experience.jsx';
import Main from './views/pages/main.jsx';
import Projects from './views/pages/projects/projects.jsx';
import Skills from './views/pages/skills/skills.jsx';

import PageNotFound from './views/pages/page-not-found/page-not-found.jsx';

export default (
    <Router history={hashHistory}>
        <Route path="/">
            <Route component={Layout}>
                <IndexRoute component={Main}/>

                <Route path="experience/" component={Experience}/>
                <Route path="projects/" component={Projects}/>
                <Route path="skills/" component={Skills}/>

                <Route path="*" component={PageNotFound}/>
            </Route>
        </Route>
    </Router>
);
