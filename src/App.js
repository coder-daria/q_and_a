import React, { Component } from 'react';
import Profile from './components/profile/Profile';
import SingleQuestion from './components/singleQuestion/SingleQuestion';
import AllQuestions from './components/allQuestions/AllQuestions';

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
