import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function TagsGroup(props) {
    const { children } = props;

    return (
        <ul className="tags-group">
            {children}
        </ul>
    );
}

TagsGroup.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
};

TagsGroup.defaultProps = {
    children: null,
};
