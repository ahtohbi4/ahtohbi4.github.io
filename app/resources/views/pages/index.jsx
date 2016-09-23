import React, {Component} from 'react';
import {render} from 'react-dom';

const data = require('../../../../data/projects.yaml');

/**
 * @class
 * @extends Component
 */
class Root extends Component {
    render() {
        let projects = [];

        for (let id in data.projects) {
            projects.push(<div>{data.projects[id].name}</div>);
        }

        return (
            <div>
                <div>Hi!</div>

                {projects}
            </div>
        );
    }
}

render(
    <Root/>,
    document.getElementById('root')
);
