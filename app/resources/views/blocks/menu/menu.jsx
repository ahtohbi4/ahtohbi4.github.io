import React, {Component} from 'react';
import {Link} from 'react-router';

import css from './menu.css';

/**
 * @class
 * @extends Component
 */
export default class Menu extends Component {
    render() {
        return (
            <nav className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/experience/">Experience</Link>
                    </li>
                    <li>
                        <Link to="/skills/">Skills</Link>
                    </li>
                    <li>
                        <Link to="/projects/">Projects</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
