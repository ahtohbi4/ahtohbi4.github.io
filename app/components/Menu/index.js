import React from 'react';
import shortid from 'shortid';

import Link from '../Link';

import './styles.css';

export default function Menu() {
  return (
    <nav className="menu">
      <ul className="menu__items">
        {[
          {
            label: 'About me',
            to: '/',
          },
          {
            label: 'Experience',
            to: '/experience/',
          },
          {
            label: 'Skills',
            to: '/skills/',
          },
          {
            label: 'Projects',
            to: '/projects/',
          },
        ].map(({ label, to }) => (
          <li key={shortid.generate()} className="menu__item">
            <Link to={to} className="menu__item-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
