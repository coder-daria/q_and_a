import * as actions from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SHOW_MODAL:
      return state;
    default:
      return state;
  }
};

export default reducer;