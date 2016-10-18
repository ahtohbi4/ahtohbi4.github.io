/**
 * @param {object} text
 * @returns {object}
 */
export const setPageTitle = (text) => {
    return {
        type: 'SET_PAGE_TITLE',
        text
    };
};
