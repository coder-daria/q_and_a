import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import reducer from './reducer';
import { reducer as form } from 'redux-form';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const rootReducer = combineReducers({
  state: reducer,
  form: form
});
const store = createStore(rootReducer, undefined, enhancer);

export default store;
