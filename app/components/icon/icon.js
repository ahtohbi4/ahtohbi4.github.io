import React, {Component} from 'react';

/**
 * @class
 * @extends Component
 */
export default class Icon extends Component {
    render() {
        return (
            <span className="icon" style={{
                display: 'inline-block',
                width: '20px',
                height: '20px',
                background: 'red'
            }}></span>
        );
    }
}
