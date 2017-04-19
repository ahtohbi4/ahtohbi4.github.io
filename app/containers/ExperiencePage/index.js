import React from 'react';
import Immutable from 'immutable';
import shortid from 'shortid';

import EXPERIENCE from '../../../data/experience.yaml';

export default function Experience() {
    const experienceReversed = Immutable.List(EXPERIENCE).reverse();

    return (
        <div>
            <h1>Experience</h1>

            {experienceReversed.map((job) => (
                <div key={shortid.generate()}>
                    <h5>{job.position}</h5>
                    {(() => {
                        const dateFrom = new Date(job.dateFrom);
                        const dateTo = new Date(job.dateTo);

                        return (
                            <p>{dateFrom.getFullYear()}-{dateTo.getFullYear()}</p>
                        );
                    })()}
                </div>
            ))}
        </div>
    );
}
