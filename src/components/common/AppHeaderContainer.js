import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import { withRouter } from 'react-router-dom';
import changeSearchBy from '../../asyncActions/changeSearchBy';

const mapStateToProps = state => {
  return {
    sortBy: state.sortBy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSortBy: sortBy => dispatch(changeSearchBy(sortBy))
  }
};

const AppHeaderContainer = connect(mapStateToProps, mapDispatchToProps)(
  AppHeader
);

const AppHeaderWithRouter = withRouter(AppHeaderContainer);


export default AppHeaderWithRouter;
