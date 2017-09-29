import React from 'react';
import PropTypes from 'prop-types';
import Answer from './Answer';
import './answers.css';
import '../../common/voting/voting.css';

class Answers extends React.Component {
  render() {
    const answer = {
      date: { whenCommented: "yesterday" },
      answer: {
        text: "Numbers or tingling in your feet should be reported to your doctior at your regular visits.",
        votes: 8
      },
      user: {
        name: "Robert",
        avatar: "http://placecorgi.com/70/70"
      },
      replies: [
        {
          date: { whenCommented: "yesterday" },
          answer: {
            text: "1Numbers or tingling in your feet should be reported to your doctior at your regular visits.",
            votes: 9
          },
          user: {
            name: "Tom",
            avatar: "http://placecorgi.com/70/70"
          }
        },
        {
          date: { whenCommented: "yesterday" },
          answer: {
            text: "2Numbers or tingling in your feet should be reported to your doctior at your regular visits.",
            votes: 12
          },
          user: {
            name: "Orson",
            avatar: "http://placecorgi.com/90/70"
          }
        },
        {
          date: { whenCommented: "yesterday" },
          answer: {
            text: "3Numbers or tingling in your feet should be reported to your doctior at your regular visits.",
            votes: 1
          },
          user: {
            name: "Julia",
            avatar: "http://placecorgi.com/70/80"
          }
        }
      ]
    }
    return (
      <div className="allAnswers">
        <div className="howManyAnswers">
          <span className="bold_number_medium">{this.props.answers.howMany}</span>
          <span className="info_text">peers already answered</span>
          </div>
        <Answer onUserClick={this.props.onUserClick} data={answer}/>
        <Answer onUserClick={this.props.onUserClick} data={answer}/>
        <Answer onUserClick={this.props.onUserClick} data={answer}/>

      </div>
    );
  }
}
Answers.defaultProps = {
  answers: { howMany: 2 }
};

Answers.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
export default Answers;