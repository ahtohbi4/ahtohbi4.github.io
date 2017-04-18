import Immutable from 'immutable';

/**
 * Get a list of tech used in the project.
 *
 * @param  {Map} tech
 * @param  {Map} project
 * @return {Map}
 */
export function techListByProject(tech, project) {
    if (!tech || !project) {
        return Immutable.OrderedMap({});
    }

    return Immutable.OrderedMap(project.get('tech').map((t) => [
        String(t),
        tech.get(String(t)),
    ]));
}

/**
 * Sort a list of tech by usage in projects.
 *
 * @param  {Map} tech
 * @param  {Map} projects
 * @param  {String} direction
 * @return {Map}
 */
export function techListSortedByUsage(tech, projects, direction) {
    if (!tech || !projects) {
        return Immutable.OrderedMap({});
    }

    const techSorted = tech.sortBy((t, id) => projects.count((project) => {
        if (!project.get('tech')) {
            return false;
        }

        return project.get('tech').includes(Number(id));
    }));

    switch (direction) {
        case 'DESC':
            return techSorted.reverse();
        case 'ASC':
        default:
            return techSorted;
    }
}
