import getQuestions from './getQuestions';
import * as actions from '../redux/actions';

const changeSearchBy = (sortBy, currentPage) => dispatch => {
  dispatch(actions.searchByCriteria(sortBy));
  dispatch(getQuestions(sortBy, currentPage));
}
export default changeSearchBy;