import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Link extends Component {
  render() {
    const { children, ...props } = this.props;

    return (
      <NavLink {...props}>
        {children}
      </NavLink>
    );
  }
}
