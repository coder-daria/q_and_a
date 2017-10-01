import {fetchQuestions} from '../api/api';
import * as actions from '../redux/actions';

const getQuestions = (sortBy, currentPage) => dispatch => {
  // const page = 1;
  const pageSize = 3;
  fetchQuestions(currentPage, pageSize, sortBy)
  .then(response => {
    if (response.status > 399){
      return Promise.reject("Something went wrong. Please retry later.")
    } else {
      return response.json();
    }
  })
  .then(questions => {
    const convertedQuestions = questions.items.map(convertQuestionFromApi);
    dispatch(actions.moreQuestions(convertedQuestions));
    dispatch(actions.increaseCurrentPage())
  })
  .catch(error => showError(error, dispatch));
}

function showError(errorMessage, dispatch){
  dispatch(actions.toggleError(errorMessage));
  setTimeout(() => {
    dispatch(actions.toggleError(""))
  }, 3000);
}

function convertQuestionFromApi(question) {
  const randomNumber = () => Math.floor(Math.random() * 50) + 1;
  return {
    user: {
      name: question.owner.display_name,
      avatar: question.owner.profile_image,
    },
    questionId: question.question_id,
    title: question.title,
    content: question.body,
    statistics: {
      related: randomNumber(),
      peers: randomNumber(),
      conversations: randomNumber()
    }
  }
}

export default getQuestions;