import React, {Component} from 'react';

import PROJECTS from '../../../../../data/projects.yaml';
import TECH from '../../../../../data/tech.yaml';

/**
 * @class
 * @extends Component
 */
export default class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>

                {Object.keys(PROJECTS).map((id) => {
                    const project = PROJECTS[id];

                    return (
                        <div key={id}>
                            <h3>{project.name}</h3>

                            <div dangerouslySetInnerHTML={{__html: project.description}}/>

                            <ul>
                                {project.tech.map((techID) => {
                                    return (
                                        <li key={techID}>{TECH[techID].name}</li>
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
