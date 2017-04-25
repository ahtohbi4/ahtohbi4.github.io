import React from 'react';
import Immutable from 'immutable';

import PROJECTS from '../../../data/projects.yaml';
import TECH from '../../../data/tech.yaml';

import {
  techListByProject,
  techListSortedByUsage,
} from '../../../utils/techList';

import TagsGroup from '../../components/TagsGroup';
import Tag from '../../components/Tag';

export default function Projects() {
  const projects = Immutable.fromJS(PROJECTS);

  return (
    <div>
      <h1>Projects ({projects.count()})</h1>

      <p>
        Some of my latest projects were collected here. Most of them are open source or were created in trying
        to understand some kind of technology.
      </p>

      {projects.entrySeq().map(([
        id,
        project,
      ]) => (
        <div key={id}>
          <h3>{project.get('name')}</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: project.get('description'),
            }}
          />

          {(project.get('tech') !== undefined) ? (
            <TagsGroup>
              {techListSortedByUsage(
                techListByProject(
                  Immutable.fromJS(TECH),
                  project,
                ),
                projects,
                'DESC',
              )
                .entrySeq()
                .map(([
                  techId,
                  tech,
                ]) => (
                  <Tag key={techId} tagName="li">{tech.get('name')}</Tag>
                ))}
            </TagsGroup>
          ) : null}
        </div>
      ))}
    </div>
  );
}
