import { connect } from 'react-redux';
import App from './App';
import store from './redux/createStore';

const mapStateToProps = state => {
  return {
    showModal: state.showModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
  }
};


const AppContainer = connect(mapStateToProps, mapDispatchToProps)(
  App
);

export default AppContainer;
