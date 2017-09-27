import { connect } from 'react-redux';
import ModalWindow from './ModalWindow';

const mapStateToProps = state => {
  return {
    showModal: state.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};


const ModalWindowContainer = connect(mapStateToProps, mapDispatchToProps)(
  ModalWindow
);

export default ModalWindowContainer;
