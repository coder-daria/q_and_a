import { connect } from 'react-redux';
import SingleQuestion from './SingleQuestion';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};

const SingleQuestionWithRouter = withRouter(SingleQuestion);

const SingleQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleQuestionWithRouter
);

export default SingleQuestionContainer;
