import chai from 'chai';
import chaiImmutable from 'chai-immutable';
const expect = chai.expect;
chai.use(chaiImmutable);

import * as techList from '../';

import Immutable from 'immutable';
const PROJECTS = Immutable.fromJS({
    3: {
        tech: [54, 0, 3]
    },
    45: {
        tech: [765, 3, 54]
    },
    7: {
        tech: [3]
    }
});
const TECH = Immutable.fromJS({
    0: {},
    765: {},
    54: {},
    3: {}
});

/**
 * Returns OrderedMap from the input array.
 *
 * @param  {Array} array
 * @return {OrderedMap}
 */
function getOrderedMap(array) {
    return Immutable.OrderedMap(array.map((item) => {
        return [String(item), Immutable.Map({})];
    }));
}

describe('Function', () => {
    describe('techListByProject()', () => {
        it('returns tech list used in the project', () => {
            expect(techList.techListByProject(TECH, PROJECTS.get('45')))
                .to.equal(getOrderedMap([765, 3, 54]));
        });
    });

    describe('techListSortedByUsage()', () => {
        it('without third parameter returns tech list sorted ASC by usage in projects.', () => {
            expect(techList.techListSortedByUsage(TECH, PROJECTS))
                .to.equal(getOrderedMap([0, 765, 54, 3]));
        });

        it('with \'ASC\' as the third parameter returns tech list sorted ASC by usage in projects.', () => {
            expect(techList.techListSortedByUsage(TECH, PROJECTS, 'ASC'))
                .to.equal(getOrderedMap([0, 765, 54, 3]));
        });

        it('with \'DESC\' as the third parameter returns tech list sorted DESC by usage in projects.', () => {
            expect(techList.techListSortedByUsage(TECH, PROJECTS, 'DESC'))
                .to.equal(getOrderedMap([3, 54, 765, 0]));
        });
    });
});
