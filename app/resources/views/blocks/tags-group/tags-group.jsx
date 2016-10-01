import React, {Component} from 'react';

import Tag from '../tag/tag.jsx';

import css from './tags-group.css';

/**
 * @class
 * @extends Component
 */
export default class TagsGroup extends Component {
    render() {
        return (
            <ul className="tags-group">
                {this.props.children}
            </ul>
        );
    }
}
