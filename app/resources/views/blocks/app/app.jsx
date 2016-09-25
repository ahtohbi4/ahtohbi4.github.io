import React, {Component} from 'react';

import PERSON from '../../../../../data/person.yaml';
import PROJECTS from '../../../../../data/projects.yaml';
import TECH from '../../../../../data/tech.yaml';

/**
 * @class
 * @extends Component
 */
export default class App extends Component {
    render() {
        const now = new Date();

        const dateOfBirth = new Date(PERSON.dateOfBirth);

        const age = now.getFullYear() - dateOfBirth.getFullYear();

        return (
            <div>
                <h1>{PERSON.name}</h1>
                <p>Age: {age}</p>
                <p>Place: {PERSON.place}</p>

                <h2>Experience</h2>
                {PERSON.experience.map((job, i) => {
                    return (
                        <div key={i}>
                            <h5>{job.position}</h5>
                            {(() => {
                                const dateFrom = new Date(job.dateFrom);
                                const dateTo = new Date(job.dateTo);

                                return (
                                    <p>{dateFrom.getFullYear()}-{dateTo.getFullYear()}</p>
                                );
                            })()}
                        </div>
                    );
                })}

                <h2>Project</h2>

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
