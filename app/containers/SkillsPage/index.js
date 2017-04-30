import React from 'react';
import Immutable from 'immutable';

import PROJECTS from '../../../data/projects.yaml';
import TECH from '../../../data/tech.yaml';

import {
  techListSortedByUsage,
} from '../../../utils/techList';

import TagsGroup from '../../components/TagsGroup';
import Tag from '../../components/Tag';

export default function Skills() {
  return (
    <div>
      <h1>My skills</h1>

      <TagsGroup>
        {techListSortedByUsage(
          Immutable.fromJS(TECH.data),
          Immutable.fromJS(PROJECTS.data),
          'DESC',
        )
          .entrySeq()
          .map(([
            id,
            tech,
          ]) => (
            <Tag key={id} tagName="li">{tech.get('name')}</Tag>
          ))}
      </TagsGroup>
    </div>
  );
}
