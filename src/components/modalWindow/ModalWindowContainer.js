import { connect } from 'react-redux';
import ModalWindow from './ModalWindow';
import * as actions from '../../redux/actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    showModal: state.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModalWindow: () => dispatch(actions.toggleModalWindow())
  }
};

const ModalWindowWithRouter = withRouter(ModalWindow);

const ModalWindowContainer = connect(mapStateToProps, mapDispatchToProps)(
  ModalWindowWithRouter
);

export default ModalWindowContainer;
