import getQuestions from './getQuestions';
import * as actions from '../redux/actions';

const changeSearchBy = (sortBy) => dispatch => {
  dispatch(actions.searchByCriteria(sortBy));
  dispatch(getQuestions(sortBy));
}
export default changeSearchBy;