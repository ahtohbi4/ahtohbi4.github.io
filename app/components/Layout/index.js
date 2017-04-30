import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';

import './styles.css';

export default function Layout(props) {
  const { children } = props;

  return (
    <div className="layout">
      <Sidebar />

      <div className="layout__content">
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]),
};

Layout.defaultProps = {
  children: null,
};
