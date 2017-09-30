import key from './key';

const urls = {
  getQuestions: (page, pageSize) => `https://api.stackexchange.com/2.2/questions?page=${page}&pagesize=${pageSize}&order=desc&sort=activity&site=stackoverflow&key=${key}`
}

export const fetchQuestions = (page, pageSize) => {
  return fetch(urls.getQuestions(page, pageSize))
};