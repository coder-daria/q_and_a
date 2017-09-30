import {fetchQuestion} from '../api/api';
import * as actions from '../redux/actions';

const getQuestion = questionId => dispatch => {
  fetchQuestion(questionId)
  .then(response => {
    if (response.status > 399){
      return Promise.reject("Something went wrong. Please retry later.")
    } else {
      return response.json();
    }
  })
  .then(question => {
    const convertedQuestion = question.items.map(convertQuestionFromApi)[0];
    dispatch(actions.displayQuestion(convertedQuestion));
    console.log(convertedQuestion);
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
  let answers = [];
  if(question.answer_count > 0){
    answers = question.answers.map(convertAnswerFromApi)
  }
  return {
    user: {
      name: question.owner.display_name,
      avatar: question.owner.profile_image,
    },
    questionId: question.question_id,
    title: question.title,
    content: question.body,
    statistics: {
      score: question.score,
      lastTimeDiscussed: question.last_activity_date,
      answerCount: question.answer_count
    },
    answers
  }
}

function convertAnswerFromApi(answer){
  let comments = [];
  if(answer.comment_count > 0){
    comments = answer.comments.map(convertCommentFromApi)
  }
  return {
    user: {
      name: answer.owner.display_name,
      avatar: answer.owner.profile_image,
    },
    content: answer.body,
    statistics: {
      score: answer.score,
      answerCount: answer.answer_count,
      creationDate: answer.creation_date
    },
    comments
  }
}

function convertCommentFromApi(comment){
  return {
    user: {
      name: comment.owner.display_name,
      avatar: comment.owner.profile_image,
    },
    content: comment.body,
    statistics: {
      score: comment.score,
      answerCount: comment.answer_count,
      creationDate: comment.creation_date
    }
  }
}

export default getQuestion;