import React, {Component} from 'react';

import Immutable from 'immutable';

import PERSON from '../../../../data/person.yaml';

/**
 * @class
 * @extends Component
 */
export default class Main extends Component {
    render() {
        const person = Immutable.fromJS(PERSON);

        return (
            <div>
                <h1>{person.get('name')}</h1>

                <p>{person.get('place')}</p>

                <h2>Contacts</h2>

                <ul>
                    {person.get('contacts').entrySeq().map(([
                        id,
                        contact
                    ]) => {
                        return <li key={id}>{contact}</li>;
                    })}
                </ul>
            </div>
        );
    }
}
