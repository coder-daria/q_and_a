import SnackbarMessage from './Snackbar';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isOpen: state.state.error,
    message: state.state.snackbarMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(
  SnackbarMessage
);

export default SnackbarContainer;