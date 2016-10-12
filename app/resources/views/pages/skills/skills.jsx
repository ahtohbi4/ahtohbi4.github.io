import React, {Component} from 'react';

import Immutable from 'immutable';

import PROJECTS from '../../../../../data/projects.yaml';
import TECH from '../../../../../data/tech.yaml';

import {techListSortedByUsage} from '../../../modules/techList';

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
                    {techListSortedByUsage(Immutable.fromJS(TECH), Immutable.fromJS(PROJECTS), 'DESC').entrySeq().map(([
                        id,
                        tech
                    ]) => {
                        return (
                            <Tag key={id} tagName="li">{tech.get('name')}</Tag>
                        );
                    })}
                </TagsGroup>
            </div>
        );
    }
}
