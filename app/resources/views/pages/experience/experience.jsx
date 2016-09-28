import React, {Component} from 'react';

import PERSON from '../../../../../data/person.yaml';

/**
 * @class
 * @extends Component
 */
export default class Experience extends Component {
    render() {
        return (
            <div>
                <h1>Experience</h1>

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
            </div>
        );
    }
}