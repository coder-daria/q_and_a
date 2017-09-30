import key from './key';

const urls = {
  getQuestions: (page, pageSize,sortBy) => `https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=${pageSize}&order=desc&sort=${sortBy}&site=health.stackexchange.com&key=${key}&filter=withbody`,
  getQuestion: questionId => `https://api.stackexchange.com/2.2/questions/${questionId}?site=health.stackexchange.com&key=${key}&filter=!ORaDYJ3okK_*Cc5)lTaVKRTUwQ-CAmTa.Itr-p*0DVX`,
  search: text => `https://api.stackexchange.com/2.2/search/advanced?site=health.stackexchange.com&key=${key}&filter=!ORaDYJ3okK_*Cc5)lTaVKRTUwQ-CAmTa.Itr-p*0DVX&title=${text}`
}

export const fetchQuestions = (page, pageSize, sortBy) => {
  return fetch(urls.getQuestions(page, pageSize, sortBy))
};
export const fetchQuestion = questionId => {
  return fetch(urls.getQuestion(questionId))
};
export const searchQuestionsBy = text => {
  return fetch(urls.search(text))
};