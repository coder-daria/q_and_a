import React, { Component } from 'react';
import SingleQuestionContainer from './components/singleQuestion/SingleQuestionContainer';
import AllQuestionContainer from './components/allQuestions/AllQuestionsContainer';
import ModalWindowContainer from './components/modalWindow/ModalWindowContainer';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/pageNotFound/pageNotFound';
import SnackbarContainer from './components/common/snackbar/SnackbarContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ModalWindowContainer />
          <Switch>
            <Route path="/" exact component={AllQuestionContainer} />
            <Route path="/question/:questionId" component={SingleQuestionContainer}  />
            <Route component={PageNotFound} />
          </Switch>
          <SnackbarContainer />
        </div>
      </Router>
    );
  }
}

export default App;
