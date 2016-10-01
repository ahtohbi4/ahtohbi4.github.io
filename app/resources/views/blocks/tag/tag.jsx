import React, {Component} from 'react';

import css from './tag.css';

/**
 * @class
 * @extends Component
 */
export default class Tag extends Component {
    static defaultProps = {
        tagName: 'div'
    }

    static propTypes = {
        tagName: React.PropTypes.string,
    }

    render() {
        const TagName = this.props.tagName;

        return (
            <TagName className="tag">{this.props.children}</TagName>
        );
    }
}
