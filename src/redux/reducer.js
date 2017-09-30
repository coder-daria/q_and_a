import * as actions from './actions';

const initialState = {
  showModal: false,
  questions: [],
  snackbarMessage: "",
  error: false,
  selectedQuestion: undefined,
  sortBy: "votes"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODAL_WINDOW:
      return Object.assign({}, state, {showModal: !state.showModal});
    case actions.ERROR:
      return Object.assign({}, state, {snackbarMessage: action.content, error: !state.error});
    case actions.DISPLAY_QUESTION:
      return Object.assign({}, state, {selectedQuestion: action.content});
    case actions.SEARCH_BY_CRITERIA:
      return Object.assign({}, state, {sortBy: action.content, questions: []});
    case actions.NEW_QUESTIONS:
      const questions = [...state.questions, ...action.content];
      return Object.assign({}, state, {questions});
    default:
      return state;
  }
};

export default reducer;