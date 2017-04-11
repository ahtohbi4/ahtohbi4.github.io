import React, {Component} from 'react';

import Menu from '../menu/menu.js';

import css from './sidebar.css';

/**
 * @class
 * @extends Component
 */
export default class Layout extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__content">
                    <div>Alexandr Antonov</div>

                    <Menu/>
                </div>
            </div>
        );
    }
}
