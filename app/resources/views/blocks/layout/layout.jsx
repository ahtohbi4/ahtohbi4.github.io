import React, {Component} from 'react';

import Sidebar from '../sidebar/sidebar.jsx';

import css from './layout.css';

/**
 * @class
 * @extends Component
 */
export default class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <Sidebar/>

                <div className="layout__content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
