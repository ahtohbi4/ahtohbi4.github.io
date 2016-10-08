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
export default class Projects extends Component {
    render() {
        const projects = Immutable.OrderedMap(PROJECTS);

        return (
            <div>
                <h1>Projects</h1>

                {projects.entrySeq().map(([
                    id,
                    project
                ]) => {
                    return (
                        <div key={id}>
                            <h3>{project.name}</h3>

                            <div dangerouslySetInnerHTML={{
                                __html: project.description
                            }}/>

                            <TagsGroup>
                                {project.tech.map((techID) => {
                                    return (
                                        <Tag key={techID} tagName="li">{TECH[techID].name}</Tag>
                                    );
                                })}
                            </TagsGroup>
                        </div>
                    );
                })}
            </div>
        );
    }
}
