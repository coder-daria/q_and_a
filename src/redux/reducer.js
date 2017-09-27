import * as actions from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case actions.TOGGLE_MODAL_WINDOW:
      return Object.assign({}, state, {showModal: !state.showModal});
    default:
      return state;
  }
};

export default reducer;