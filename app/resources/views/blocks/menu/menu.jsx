import React, {Component} from 'react';

import Link from '../Link';

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
            <Link to="/" className="menu__item-link">About me</Link>
          </li>

          <li className="menu__item">
            <Link to="/experience/" className="menu__item-link">Experience</Link>
          </li>

          <li className="menu__item">
            <Link to="/skills/" className="menu__item-link">Skills</Link>
          </li>

          <li className="menu__item">
            <Link to="/projects/" className="menu__item-link">Projects</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
