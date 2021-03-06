import React, { Component } from 'react';
import Immutable from 'immutable';

import PERSON from '../../../data/person.yaml';

import Icon from '../../components/Icon';

import './styles.css';

/**
 * @class
 * @extends Component
 */
export default class Main extends Component {
  render() {
    const person = Immutable.fromJS(PERSON.data);

    const age = ((/* @type {Date} */ dateOfBirth) => {
      const ageDifMs = Date.now() - dateOfBirth;
      const ageDate = new Date(ageDifMs);

      return Math.abs(ageDate.getUTCFullYear() - 1970);
    })(new Date(person.get('dateOfBirth')));

    return (
      <div>
        <h1 className="main__title">{person.get('name')}</h1>
        <p>Front-End Developer</p>

        <p>Age: {age}<br /> Place: {person.get('place')}</p>

        {person.get('links').entrySeq().map(([
          type,
          link,
        ]) => (
          <div key={type}>
            <Icon type={type} /> <a href="{link}" target="_blank" rel="noopener noreferrer">{link}</a>
          </div>
        ))}

        <h2>Education</h2>
        <p>
          2002-2008<br />
          Higher education degree. The Bauman Moscow State Technical University (Bauman MSTU), department of
          Informatics and Control Systems (IU),  specialist of Automatic Control Systems for Flight Vehicles.
        </p>

        <h2>Contacts</h2>

        <ul>
          {person.get('contacts').entrySeq().map(([
            id,
            contact,
          ]) => (
            <li key={id}>{contact}</li>
          ))}
        </ul>
      </div>
    );
  }
}
