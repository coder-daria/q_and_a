import React, { Component } from 'react';
import SingleQuestionContainer from './components/singleQuestion/SingleQuestionContainer';
import AllQuestions from './components/allQuestions/AllQuestions';
import ModalWindowContainer from './components/modalWindow/ModalWindowContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={AllQuestions} />
          <Route path={`/single_question`} component={SingleQuestionContainer} />
          <ModalWindowContainer />
        </div>
      </Router>
    );
  }
}

export default App;
