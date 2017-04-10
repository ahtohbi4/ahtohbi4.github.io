/**
 * The main routing for the app.
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from './views/blocks/layout/layout.jsx';

import Experience from './views/pages/experience/experience.jsx';
import Main from './views/pages/main.jsx';
import Projects from './views/pages/projects/projects.jsx';
import Skills from './views/pages/skills/skills.jsx';

import PageNotFound from './views/pages/page-not-found/page-not-found.jsx';

export default (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/experience/" component={Experience} />
        <Route path="/projects/" component={Projects} />
        <Route path="/skills/" component={Skills} />

        <Route component={PageNotFound} />
      </Switch>
    </Layout>
  </Router>
);
