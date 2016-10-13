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
                        <MenuLink to="/">About me</MenuLink>
                    </li>

                    <li className="menu__item">
                        <MenuLink to="/experience/">Experience</MenuLink>
                    </li>

                    <li className="menu__item">
                        <MenuLink to="/skills/">Skills</MenuLink>
                    </li>

                    <li className="menu__item">
                        <MenuLink to="/projects/">Projects</MenuLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

/**
 * @class
 * @extends Component
 */
class MenuLink extends Component {
    render() {
        return (
            <Link
                activeClassName="menu__item-link_active"
                className="menu__item-link"
                {...this.props}/>
        );
    }
}
