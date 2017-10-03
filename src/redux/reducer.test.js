import reducer from './reducer';
import * as actions from './actions';
// import { createStore } from 'redux';

let initialState;
// let store;

beforeEach(() => {
  initialState = {
    showModal: false,
    currentPage: 1,
    questions: [],
    snackbarMessage: "",
    error: false,
    selectedQuestion: undefined,
    sortBy: "hot"
  };
  // store = createStore(reducer, initialState);
});

xit('handles TOGGLE_MODAL_WINDOW', () => {
  let action = actions.toggleModalWindow();
  let newState = reducer(initialState, action);

  expect(initialState).not.toEqual(newState);
  expect(newState.showModal).toEqual(true);
});

xit('handles ERROR', () => {
  let action = actions.toggleError("404");
  let newState = reducer(initialState, action);

  expect(initialState).not.toEqual(newState);
  expect(newState.error).toEqual(true);
  expect(newState.snackbarMessage).toEqual("404");
});

xit('handles DISPLAY_QUESTION', () => {
  let action = actions.displayQuestion({
    user: "Jessica Flower",
    question: "How to protect skin from the sun?",
    answers: [
      {
        content: "Choose a broad spectrum sunscreen that protects against both UVA and UVB radiation.",
        score: 20
      },
      {
        content: "If possible, wear a long-sleeved shirt and long pants.",
        score: 8
      }
    ]
  });
  let newState = reducer(initialState, action);
  expect(initialState).not.toEqual(newState);
  expect(newState.selectedQuestion.user).toEqual("Jessica Flower");
  expect(newState.selectedQuestion.answers[0].score).toEqual(20);
  expect(newState.selectedQuestion.answers[1].content).toEqual("If possible, wear a long-sleeved shirt and long pants.");
});
it('handles SEARCH_BY_CRITERIA', () => {
  action = actions.searchByCriteria("hot");
  let newState = reducer(initialState, action);

  expect(initialState).not.toEqual(newState);
  expect(newState.sortBy).toEqual("hot");
});
xit('handles MORE_QUESTIONS', () => {});
it('handles NEW_QUESTIONS', () => {});

it('handles CHANGE_CURRENT_PAGE', () => {
  action = actions.increaseCurrentPage();
  let newState = reducer(initialState, action);

  expect(initialState).not.toEqual(newState);
  expect(newState.currentPage).toEqual(2);
});
it('handles QUESTION_VOTES', () => {

});
it('handles ANSWER_VOTES', () => {

});
it('handles COMMENT_VOTES', () => {

});