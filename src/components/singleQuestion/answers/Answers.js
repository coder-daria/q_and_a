import React from 'react';
import Answer from './Answer';
import './answers.css';
import '../../common/voting/voting.css';

class Answers extends React.Component {
  render() {
    return (
      <div className="allAnswers">
        <div className="howManyAnswers"><span className="allAnswers_number">{this.props.answers.howMany}</span>peers already answered</div>
        <Answer showModal={this.props.showModal}/>
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
Answers.defaultProps = {
  answers: {howMany: 2}
};

export default Answers;