import React, {Component} from 'react';

import TECH from '../../../../../data/tech.yaml';

import TagsGroup from '../../blocks/tags-group/tags-group.jsx';
import Tag from '../../blocks/tag/tag.jsx';

/**
 * @class
 * @extends Component
 */
export default class Skills extends Component {
    render() {
        return (
            <div>
                <h1>My skills</h1>

                <TagsGroup>
                    {Object.keys(TECH).map((id) => {
                        const tech = TECH[id];

                        return (
                            <Tag key={id} tagName="li">{tech.name}</Tag>
                        );
                    })}
                </TagsGroup>

            </div>
        );
    }
}
