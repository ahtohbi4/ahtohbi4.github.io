import React, {Component} from 'react';

import Immutable from 'immutable';

import EXPERIENCE from '../../../data/experience.yaml';

/**
 * @class
 * @extends Component
 */
export default class Experience extends Component {
    render() {
        const experienceReversed = Immutable.List(EXPERIENCE).reverse();

        return (
            <div>
                <h1>Experience</h1>

                {experienceReversed.map((job, i) => {
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
