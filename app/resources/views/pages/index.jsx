import React, {Component} from 'react';
import {render} from 'react-dom';

const PROJECTS = require('../../../../data/projects.yaml').projects;
const TECHS = require('../../../../data/technologies.yaml').technologies;

/**
 * @class
 * @extends Component
 */
class Root extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>

                {Object.keys(PROJECTS).map((id) => {
                    const project = PROJECTS[id];

                    return (
                        <div key={id}>
                            <h3>{project.name}</h3>

                            <ul>
                                {project.tech.map((techID) => {
                                    return (
                                        <li key={techID}>{TECHS[techID].name}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

render(
    <Root/>,
    document.getElementById('root')
);
