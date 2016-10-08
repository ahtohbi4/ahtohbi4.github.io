import React, {Component} from 'react';

import Immutable from 'immutable';

import TECH from '../../../../../data/tech.yaml';

import TagsGroup from '../../blocks/tags-group/tags-group.jsx';
import Tag from '../../blocks/tag/tag.jsx';

/**
 * @class
 * @extends Component
 */
export default class Skills extends Component {
    render() {
        const techs = Immutable.OrderedMap(TECH);

        return (
            <div>
                <h1>My skills</h1>

                <TagsGroup>
                    {techs.entrySeq().map(([
                        id,
                        tech
                    ]) => {
                        return (
                            <Tag key={id} tagName="li">{tech.name}</Tag>
                        );
                    })}
                </TagsGroup>
            </div>
        );
    }
}
