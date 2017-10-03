export const TOGGLE_MODAL_WINDOW = "TOGGLE_MODAL_WINDOW";
export const MORE_QUESTIONS = "MORE_QUESTIONS";
export const NEW_QUESTIONS = "NEW_QUESTIONS";
export const ERROR = "ERROR";
export const DISPLAY_QUESTION = "DISPLAY_QUESTION";
export const SEARCH_BY_CRITERIA = "SEARCH_BY_CRITERIA";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS";
export const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
export const QUESTION_VOTES = "QUESTION_VOTES";
export const ANSWER_VOTES = "ANSWER_VOTES";
export const COMMENT_VOTES = "COMMENT_VOTES";

export const toggleModalWindow = () => {
  return { type: TOGGLE_MODAL_WINDOW };
}

export const moreQuestions = questions => {
  return { type: MORE_QUESTIONS, content: questions };
}

export const newQuestions = questions => {
  return { type: NEW_QUESTIONS, content: questions };
}

export const toggleError = message => {
  return { type: ERROR, content: message };
}

export const displayQuestion = question => {
  return { type: DISPLAY_QUESTION, content: question };
}

export const searchByCriteria = criteria => {
  return { type: SEARCH_BY_CRITERIA, content: criteria };
}
export const increaseCurrentPage = () => {
  return { type: CHANGE_CURRENT_PAGE};
}
export const questionVotes = number => {
  return {type: QUESTION_VOTES, content: number};
}
export const answerVotes = (number, index) => {
  return {type: ANSWER_VOTES, content: {increment: number, answerIndex: index}};
}
export const commentVotes = (number, index) => {
  return {type: COMMENT_VOTES, content: {increment: number, commentIndex: index}};
}