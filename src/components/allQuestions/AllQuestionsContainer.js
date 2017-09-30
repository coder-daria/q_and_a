import { connect } from 'react-redux';
import AllQuestions from './AllQuestions';
import { withRouter } from 'react-router-dom';
import {toggleModalWindow} from './../../redux/actions';
import getQuestions from '../../asyncActions/getQuestions';

const mapStateToProps = state => {
  return {
    questions: state.questions,
    sortBy: state.sortBy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserClick: ()=> dispatch(toggleModalWindow()),
    loadMore: sortBy => dispatch(getQuestions(sortBy))
  }
};

const AllQuestionWithRouter = withRouter(AllQuestions);

const AllQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  AllQuestionWithRouter
);

export default AllQuestionContainer;
