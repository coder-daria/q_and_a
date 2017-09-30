import { connect } from 'react-redux';
import ModalWindow from './ModalWindow';
import * as actions from '../../redux/actions';

const mapStateToProps = state => {
  return {
    showModal: state.state.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModalWindow: () => dispatch(actions.toggleModalWindow())
  }
};

const ModalWindowContainer = connect(mapStateToProps, mapDispatchToProps)(
  ModalWindow
);

export default ModalWindowContainer;
