import React, {Component} from 'react';
import {Link} from 'react-router';

import DevTools from '../../../../utils/DevTools';

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

                <div>{this.props.children}</div>

                {__DEV__ ? <DevTools/> : null}
            </div>
        );
    }
}
