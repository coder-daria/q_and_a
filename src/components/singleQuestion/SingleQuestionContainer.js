import { connect } from 'react-redux';
import SingleQuestion from './SingleQuestion';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};


const SingleQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleQuestion
);

export default SingleQuestionContainer;
