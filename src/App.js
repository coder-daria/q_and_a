import React, { Component } from 'react';
import SingleQuestionContainer from './components/singleQuestion/SingleQuestionContainer';
import AllQuestionContainer from './components/allQuestions/AllQuestionsContainer';
import ModalWindowContainer from './components/modalWindow/ModalWindowContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './components/pageNotFound/pageNotFound';
import SnackbarContainer from './components/common/snackbar/SnackbarContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ModalWindowContainer />
          <Switch>
            <Route path="/" exact component={AllQuestionContainer} onEnter={() => console.log("hola")}/>
            <Route path="/question/:questionId" component={SingleQuestionContainer}  onEnter={() => console.log("hola")}/>
            <Route component={PageNotFound} />
          </Switch>
          <SnackbarContainer />
        </div>
      </Router>
    );
  }
}

export default App;
