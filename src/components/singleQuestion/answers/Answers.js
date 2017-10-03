import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import './answers.css';
import '../../common/voting/voting.css';

class Answers extends React.Component {
  render() {
    const answers = this.props.question.answers.map((answer, index)=> {
      return (
        <Answer key={index} index={index} answerVotes={this.props.answerVotes} commentVotes={this.props.commentVotes} onUserClick={this.props.onUserClick} answer={answer}/>
      )
    });
    return (
      <div className="allAnswers">
        <div className="howManyAnswers">
          <span className="bold_number_medium">{this.props.question.statistics.answerCount}</span>
          <span className="info_text">peers already answered</span>
          </div>
        {answers}

      </div>
    );
  }
}

Answers.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
};
export default Answers;