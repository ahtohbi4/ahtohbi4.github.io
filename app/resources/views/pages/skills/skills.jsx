import React, {Component} from 'react';

import Immutable from 'immutable';

import PROJECTS from '../../../../../data/projects.yaml';
import TECH from '../../../../../data/tech.yaml';

import TagsGroup from '../../blocks/tags-group/tags-group.jsx';
import Tag from '../../blocks/tag/tag.jsx';

/**
 * @class
 * @extends Component
 */
export default class Skills extends Component {
    render() {
        const projects = Immutable.Map(PROJECTS);

        /**
         * Sorting technologies by the count of using in projects.
         */
        const techsSorted = Immutable.Map(TECH).sortBy((tech, id) => {
            return projects.count((project) => {
                return Immutable.Set(project.tech).includes(Number(id));
            });
        }).reverse();

        return (
            <div>
                <h1>My skills</h1>

                <TagsGroup>
                    {techsSorted.entrySeq().map(([
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
