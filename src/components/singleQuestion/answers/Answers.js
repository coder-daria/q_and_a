import React from 'react';
import Answer from './Answer';
import './answers.css';
import '../../common/voting/voting.css';

class Answers extends React.Component {
  render() {
    return (
      <div className="allAnswers">
        <div className="howManyAnswers"><span className="allAnswers_number">2</span> peers already answered</div>
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