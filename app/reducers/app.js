/**
 * Storage
 *
 * @type {object}
 * @member {string} pageTitle
 */
const INITIAL_STATE = {
    pageTitle: 'Alexandr Antonov - Front-end developer.',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      if (!action.text) {
        // Not valid
        return state;
      }

      return {
        ...state,
        pageTitle: action.pageTitle,
      };

    default:
      return state;
  }
}
