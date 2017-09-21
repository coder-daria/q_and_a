import React from 'react';
import Answer from './Answer';
import './answers.css';
import '../../common/voting/voting.css';

class Answers extends React.Component {
  render() {
    return (
      <div className="allAnswers">
        <span className="howManyAnswers">2 peers already answered</span>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    );
  }
}

export default Answers;