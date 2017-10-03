import { connect } from 'react-redux';
import SingleQuestion from './SingleQuestion';
import * as actions from './../../redux/actions';
import { withRouter } from 'react-router-dom';
import getQuestion from '../../asyncActions/getQuestion';

const mapStateToProps = (state, ownProps) => {
  const questionToFetch = state.state.questions[ownProps.match.params.questionId];
  return {
    questionToFetch,
    selectedQuestion: state.state.selectedQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadQuestion: questionId => dispatch(getQuestion(questionId)),
    onUserClick: ()=> dispatch(actions.toggleModalWindow()),
    questionVotes: number => dispatch(actions.questionVotes(number)),
    answerVotes: (number, answerIndex) => dispatch(actions.answerVotes(number, answerIndex)),
    commentVotes: (number, answerIndex, commentIndex) => dispatch(actions.commentVotes(number, answerIndex, commentIndex))
  }
};

const SingleQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleQuestion
);

const SingleQuestionWithRouter = withRouter(SingleQuestionContainer);


export default SingleQuestionWithRouter;
