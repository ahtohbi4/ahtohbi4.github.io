import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default function Link(props) {
    const { children, ...rest } = props;

    return (
        <NavLink {...rest}>
            {children}
        </NavLink>
    );
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
};

Link.defaultProps = {
    children: null,
};
