import { connect } from 'react-redux';
import SingleQuestion from './SingleQuestion';
import {toggleModalWindow} from './../../redux/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showModal: ()=> dispatch(toggleModalWindow())
  }
};

const SingleQuestionWithRouter = withRouter(SingleQuestion);

const SingleQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(
  SingleQuestionWithRouter
);

export default SingleQuestionContainer;
