import React from 'react';

import Tag from '../Tag';

import './styles.css';

export default function TagsGroup(props) {
    const { children } = props;

    return (
        <ul className="tags-group">
            {children}
        </ul>
    );
}
