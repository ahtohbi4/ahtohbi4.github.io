import React, {Component} from 'react';

import Immutable from 'immutable';

import PROJECTS from '../../../../../data/projects.yaml';
import TECH from '../../../../../data/tech.yaml';

import {techListByProject, techListSortedByUsage} from '../../../modules/techList';

import TagsGroup from '../../blocks/tags-group/tags-group.jsx';
import Tag from '../../blocks/tag/tag.jsx';

/**
 * @class
 * @extends Component
 */
export default class Projects extends Component {
    render() {
        const projects = Immutable.fromJS(PROJECTS);

        return (
            <div>
                <h1>Projects</h1>

                {projects.entrySeq().map(([
                    id,
                    project
                ]) => {
                    return (
                        <div key={id}>
                            <h3>{project.get('name')}</h3>

                            <div dangerouslySetInnerHTML={{
                                __html: project.get('description')
                            }}/>

                            <TagsGroup>
                                {techListSortedByUsage(techListByProject(Immutable.fromJS(TECH), project), projects, 'ASC').entrySeq().map(([
                                    id,
                                    tech
                                ]) => { console.log(tech);
                                    return (
                                        <Tag key={id} tagName="li">{tech.get('name')}</Tag>
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
