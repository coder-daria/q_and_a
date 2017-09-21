import React, { Component } from 'react';
import Profile from './components/profile/Profile';
import SingleQuestion from './components/singleQuestion/SingleQuestion';
import AllQuestions from './components/allQuestions/AllQuestions';
import Modal from './components/modalWindow/ModalWindow';

class App extends Component {
  render() {
    return (
      <div>
        <AllQuestions />
      </div>
    );
  }
}

export default App;
