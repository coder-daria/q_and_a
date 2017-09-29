import { connect } from 'react-redux';
import AllQuestions from './AllQuestions';
import { withRouter } from 'react-router-dom';
import {toggleModalWindow} from './../../redux/actions';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUserClick: ()=> dispatch(toggleModalWindow())
  }
};

const AllQuestionWithRouter = withRouter(AllQuestions);

const AllQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  AllQuestionWithRouter
);

export default AllQuestionContainer;
