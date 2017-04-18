import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Link(props) {
    const { children, ...rest } = props;

    return (
        <NavLink {...rest}>
            {children}
        </NavLink>
    );
}
