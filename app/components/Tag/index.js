import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default function Tag(props) {
    const { tagName: TagName, children } = props;

    return (
        <TagName className="tag">
            {children}
        </TagName>
    );
}

Tag.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string,
    ]),
    tagName: PropTypes.string,
};

Tag.defaultProps = {
    children: null,
    tagName: 'div',
};
