import React, { Component } from 'react';
import SingleQuestionContainer from './components/singleQuestion/SingleQuestionContainer';
import AllQuestions from './components/allQuestions/AllQuestions';
import ModalWindowContainer from './components/modalWindow/ModalWindowContainer';

class App extends Component {
  render() {
    let showModalWindow = this.props.showModal ? <ModalWindowContainer /> : null;
    return (
      <div>
        <SingleQuestionContainer />
        {showModalWindow}
      </div>
    );
  }
}

export default App;
