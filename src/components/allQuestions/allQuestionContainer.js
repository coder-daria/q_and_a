import { connect } from 'react-redux';
import AllQuestion from './AllQuestion';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

const AllQuestionWithRouter = withRouter(AllQuestion);

const AllQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  AllQuestionWithRouter
);

export default AllQuestionContainer;
