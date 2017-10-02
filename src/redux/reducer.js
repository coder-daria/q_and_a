import * as actions from './actions';

const initialState = {
  showModal: false,
  currentPage: 1,
  questions: [],
  snackbarMessage: "",
  error: false,
  selectedQuestion: undefined,
  sortBy: "hot"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODAL_WINDOW:
      return Object.assign({}, state, { showModal: !state.showModal });
    case actions.ERROR:
      return Object.assign({}, state, { snackbarMessage: action.content, error: !state.error });
    case actions.DISPLAY_QUESTION:
      return Object.assign({}, state, { selectedQuestion: action.content });
    case actions.SEARCH_BY_CRITERIA:
      return Object.assign({}, state, { sortBy: action.content, questions: [] });
    case actions.MORE_QUESTIONS:
      const questions = [...state.questions, ...action.content];
      return Object.assign({}, state, { questions });
    case actions.NEW_QUESTIONS:
      return Object.assign({}, state, { questions: [...action.content] });
    case actions.CHANGE_CURRENT_PAGE:
      return Object.assign({}, state, { currentPage: state.currentPage + 1 })
    case actions.UP_VOTE:
      let selectedQuestionScore = state.selectedQuestion.statistics.score;
      let score = Object.assign({}, state.selectedQuestion.statistics,{ score: selectedQuestionScore + 1});
      let selectedQuestion = Object.assign({}, state.selectedQuestion, {statistics: score})
      return Object.assign({}, state, { selectedQuestion: selectedQuestion});
    case actions.DOWN_VOTE:
      let chosenQuestionScore = state.selectedQuestion.statistics.score;
      let decreaseScore = Object.assign({}, state.selectedQuestion.statistics,{ score: chosenQuestionScore - 1});
      let chosenQuestion = Object.assign({}, state.selectedQuestion, {statistics: decreaseScore});
      return Object.assign({}, state, { selectedQuestion: chosenQuestion});
    default:
      return state;
  }
};

export default reducer;