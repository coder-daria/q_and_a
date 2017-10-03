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
      return Object.assign({}, state, { currentPage: state.currentPage + 1 });
    case actions.QUESTION_VOTES:
      const chosenQuestionScore = state.selectedQuestion.statistics.score;
      const changeQuestionScore = Object.assign({}, state.selectedQuestion.statistics,{ score: chosenQuestionScore + action.content});
      const question = Object.assign({}, state.selectedQuestion, {statistics: changeQuestionScore});
      return Object.assign({}, state, { selectedQuestion: question});
    case actions.ANSWER_VOTES:
      const selectedAnswer = state.selectedQuestion.answers[action.content.answerIndex];
      const statistics = Object.assign({}, selectedAnswer.statistics,{ score: selectedAnswer.statistics.score + action.content.increment});
      const singleAnswer = Object.assign({}, selectedAnswer, {statistics: statistics});
      const answers = [...state.selectedQuestion.answers];
      answers[action.content.answerIndex] = singleAnswer;
      const selectedQuestion = Object.assign({}, state.selectedQuestion, {answers});
      return Object.assign({}, state, {selectedQuestion});

    case actions.COMMENT_VOTES:
    const selectedComment = state.selectedQuestion.answers[action.content.answerIndex].comments[action.content.commentIndex];
    const commentStatistics = Object.assign({}, selectedComment.statistics,{ score: selectedComment.statistics.score + action.content.increment});
    const singleComment = Object.assign({}, selectedComment, {statistics: commentStatistics});
    const comments = [...state.selectedQuestion.answers[action.content.answerIndex].comments];
    comments[action.content.commentIndex] = singleComment;
    const allAnswer= Object.assign({}, state.selectedQuestion.answers[action.content.answerIndex], {comments});
    const chosenQuestion= Object.assign({}, state.selectedQuestion, {answers: [allAnswer]});
    return Object.assign({}, state, {selectedQuestion: chosenQuestion});
    default:
      return state;
  }
};

export default reducer;