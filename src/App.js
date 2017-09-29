import React, { Component } from 'react';
import SingleQuestionContainer from './components/singleQuestion/SingleQuestionContainer';
import AllQuestionContainer from './components/allQuestions/AllQuestionsContainer';
import ModalWindowContainer from './components/modalWindow/ModalWindowContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/pageNotFound/pageNotFound';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ModalWindowContainer />
          <Switch>
            <Route path="/" exact component={AllQuestionContainer} />
            <Route path="/single_question" component={SingleQuestionContainer} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
