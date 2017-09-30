import { connect } from 'react-redux';
import AllQuestions from './AllQuestions';
import { withRouter } from 'react-router-dom';
import {toggleModalWindow} from './../../redux/actions';
import getQuestions from '../../asyncActions/getQuestions';

const mapStateToProps = state => {
  return {
    questions: state.questions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserClick: ()=> dispatch(toggleModalWindow()),
    loadMore: ()=> dispatch(getQuestions())
  }
};

const AllQuestionWithRouter = withRouter(AllQuestions);

const AllQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  AllQuestionWithRouter
);

export default AllQuestionContainer;
