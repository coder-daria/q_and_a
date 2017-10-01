import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './redux/createStore';
import { Provider } from 'react-redux';
import getQuestions from './asyncActions/getQuestions';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(getQuestions("votes", 1));

registerServiceWorker();
