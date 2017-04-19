/**
 * @param {object} text
 * @returns {object}
 */
export function setPageTitle(text) {
    return {
        type: 'SET_PAGE_TITLE',
        text,
    };
}
