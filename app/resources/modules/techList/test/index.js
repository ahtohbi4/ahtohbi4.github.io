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

describe('To get', () => {
    describe('an empty tech list of a project', () => {
        it('by using techListByProject() with empty tech list', () => {
            expect(techList.techListByProject(Immutable.fromJS(undefined), PROJECTS.get('45')))
                .to.equal(getOrderedMap([]));
        });

        it('by using techListByProject() with empty projects list', () => {
            expect(techList.techListByProject(TECH, Immutable.fromJS(undefined)))
                .to.equal(getOrderedMap([]));
        });

        it('by using techListByProject() with projects list containing no tech', () => {
            const projects = PROJECTS.set(99, Immutable.Map({}));

            expect(techList.techListByProject(TECH, projects.get('99')))
                .to.equal(getOrderedMap([]));
        });
    });

    describe('a tech list of a project', () => {
        it('by using techListByProject()', () => {
            expect(techList.techListByProject(TECH, PROJECTS.get('45')))
                .to.equal(getOrderedMap([765, 3, 54]));
        });
    });

    describe('an empty tech list', () => {
        it('by using techListSortedByUsage() with empty tech list', () => {
            expect(techList.techListSortedByUsage(Immutable.fromJS(undefined), PROJECTS))
                .to.equal(getOrderedMap([]));
        });

        it('by using techListSortedByUsage() with empty projects list', () => {
            expect(techList.techListSortedByUsage(TECH, Immutable.fromJS(undefined)))
                .to.equal(getOrderedMap([]));
        });

        it('by using techListSortedByUsage() with projects list containing no tech', () => {
            const projects = PROJECTS.set(99, Immutable.Map({}));

            expect(techList.techListSortedByUsage(TECH, projects))
                .to.equal(getOrderedMap([0, 765, 54, 3]));
        });
    });

    describe('a tech list sorted', () => {
        it('ASC by usage in projects.', () => {
            expect(techList.techListSortedByUsage(TECH, PROJECTS))
                .to.equal(getOrderedMap([0, 765, 54, 3]));
        });

        it('ASC by usage in projects.', () => {
            expect(techList.techListSortedByUsage(TECH, PROJECTS, 'ASC'))
                .to.equal(getOrderedMap([0, 765, 54, 3]));
        });

        it('DESC by usage in projects.', () => {
            expect(techList.techListSortedByUsage(TECH, PROJECTS, 'DESC'))
                .to.equal(getOrderedMap([3, 54, 765, 0]));
        });
    });

    describe('a tech list of a project sorted', () => {
        it('DESC by usage in projects.', () => {
            expect(techList.techListSortedByUsage(techList.techListByProject(TECH, PROJECTS.get('3')), PROJECTS, 'DESC'))
                .to.equal(getOrderedMap([3, 54, 0]));
        });
    });
});
