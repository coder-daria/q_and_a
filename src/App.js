import React, { Component } from 'react';
import SingleQuestionContainer from './components/singleQuestion/SingleQuestionContainer';
import AllQuestions from './components/allQuestions/AllQuestions';
import ModalWindowContainer from './components/modalWindow/ModalWindowContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <img src="http://s.quickmeme.com/img/a8/a8022006b463b5ed9be5a62f1bdbac43b4f3dbd5c6b3bb44707fe5f5e26635b0.jpg"/>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ModalWindowContainer />
          <Switch>
            <Route path="/" exact component={AllQuestions} />
            <Route path="/single_question" component={SingleQuestionContainer} />
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
