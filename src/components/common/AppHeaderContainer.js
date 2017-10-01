import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import { withRouter } from 'react-router-dom';
import changeSearchBy from '../../asyncActions/changeSearchBy';
import searchQuestions from '../../asyncActions/searchQuestions';
import { reduxForm } from 'redux-form';

const mapStateToProps = state => {
  return {
    sortBy: state.state.sortBy,
    currentPage: state.state.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSortBy: (sortBy, currentPage) => dispatch(changeSearchBy(sortBy, currentPage)),
    onSubmit: values => dispatch(searchQuestions(values.search))
  }
};

const AppHeaderForm = reduxForm({
  form: 'search',
})(AppHeader);

const AppHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(
  AppHeaderForm
);

const AppHeaderWithRouter = withRouter(AppHeaderContainer);


export default AppHeaderWithRouter;
