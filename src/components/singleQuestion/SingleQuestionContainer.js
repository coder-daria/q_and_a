import { connect } from 'react-redux';
import SingleQuestion from './SingleQuestion';
import * as actions from './../../redux/actions';
import { withRouter } from 'react-router-dom';
import getQuestion from '../../asyncActions/getQuestion';

const mapStateToProps = (state, ownProps) => {
  const questionId = state.state.questions[ownProps.match.params.questionId].questionId;
  return {
    questionId,
    selectedQuestion: state.state.selectedQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadQuestion: questionId => dispatch(getQuestion(questionId)),
    onUserClick: ()=> dispatch(actions.toggleModalWindow()),
    upVote: () => dispatch(actions.upVote()),
    downVote: () => dispatch(actions.downVote())
  }
};

const SingleQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleQuestion
);

const SingleQuestionWithRouter = withRouter(SingleQuestionContainer);


export default SingleQuestionWithRouter;
