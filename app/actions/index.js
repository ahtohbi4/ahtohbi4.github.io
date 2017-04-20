/**
 * @param {String} text
 * @returns {Object}
 */
export function setPageTitle(text) {
    return {
        type: 'SET_PAGE_TITLE',
        text,
    };
}
