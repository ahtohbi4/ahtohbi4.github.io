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
                <ul className="menu__items">
                    <li className="menu__item">
                        <Link className="menu__item-link" to="/">About me</Link>
                    </li>

                    <li className="menu__item">
                        <Link className="menu__item-link" to="/experience/">Experience</Link>
                    </li>

                    <li className="menu__item">
                        <Link className="menu__item-link" to="/skills/">Skills</Link>
                    </li>

                    <li className="menu__item">
                        <Link className="menu__item-link" to="/projects/">Projects</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
