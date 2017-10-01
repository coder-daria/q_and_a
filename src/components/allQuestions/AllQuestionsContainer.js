import { connect } from 'react-redux';
import AllQuestions from './AllQuestions';
import { withRouter } from 'react-router-dom';
import {toggleModalWindow} from './../../redux/actions';
import getQuestions from '../../asyncActions/getQuestions';

const mapStateToProps = state => {
  return {
    questions: state.state.questions,
    sortBy: state.state.sortBy,
    currentPage: state.state.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserClick: ()=> dispatch(toggleModalWindow()),
    loadMore: (sortBy, currentPage) => dispatch(getQuestions(sortBy, currentPage))
  }
};

const AllQuestionWithRouter = withRouter(AllQuestions);

const AllQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  AllQuestionWithRouter
);

export default AllQuestionContainer;
