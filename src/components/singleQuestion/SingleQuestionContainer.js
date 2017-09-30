import { connect } from 'react-redux';
import SingleQuestion from './SingleQuestion';
import {toggleModalWindow} from './../../redux/actions';
import { withRouter } from 'react-router-dom';
import getQuestion from '../../asyncActions/getQuestion';

const mapStateToProps = (state, ownProps) => {
  const questionId = state.questions[ownProps.match.params.questionId].questionId;
  return {
    questionId,
    selectedQuestion: state.selectedQuestion
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadQuestion: questionId => dispatch(getQuestion(questionId)),
    onUserClick: ()=> dispatch(toggleModalWindow())
  }
};

const SingleQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleQuestion
);

const SingleQuestionWithRouter = withRouter(SingleQuestionContainer);


export default SingleQuestionWithRouter;
