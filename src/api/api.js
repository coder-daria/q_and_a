import key from './key';

const urls = {
  getQuestions: (page, pageSize) => `https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=${pageSize}&order=desc&sort=activity&site=health.stackexchange.com&key=${key}&filter=withbody`,
  getQuestion: questionId => `https://api.stackexchange.com/2.2/questions/${questionId}?site=health.stackexchange.com&key=${key}&filter=!ORaDYJ3okK_*Cc5)lTaVKRTUwQ-CAmTa.Itr-p*0DVX`
}

export const fetchQuestions = (page, pageSize) => {
  return fetch(urls.getQuestions(page, pageSize))
};
export const fetchQuestion = questionId => {
  return fetch(urls.getQuestion(questionId))
};