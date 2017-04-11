/**
 * The main routing for the app.
 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from './components/layout/layout.js';

import ExperiencePage from './containers/ExperiencePage';
import MainPage from './containers/MainPage';
import ProjectsPage from './containers/ProjectsPage';
import SkillsPage from './containers/SkillsPage';

import NotFoundPage from './containers/NotFoundPage';

export default (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={MainPage} />

        <Route path="/experience/" component={ExperiencePage} />
        <Route path="/projects/" component={ProjectsPage} />
        <Route path="/skills/" component={SkillsPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  </Router>
);
