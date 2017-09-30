export const TOGGLE_MODAL_WINDOW = "TOGGLE_MODAL_WINDOW";
export const NEW_QUESTIONS = "NEW_QUESTIONS";
export const ERROR = "ERROR";

export const toggleModalWindow = () => {
  return { type: TOGGLE_MODAL_WINDOW };
}

export const newQuestions = questions => {
  return { type: NEW_QUESTIONS, content: questions };
}

export const toggleError = message => {
  return { type: ERROR, content: message };
}