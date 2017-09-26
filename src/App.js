import React, { Component } from 'react';
import SingleQuestion from './components/singleQuestion/SingleQuestion';
import AllQuestions from './components/allQuestions/AllQuestions';
import ModalWindow from './components/modalWindow/ModalWindow';

class App extends Component {
  render() {
    return (
      <div>
        <SingleQuestion />
      </div>
    );
  }
}

export default App;
