import React from 'react';
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
        avatar: "https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square"
      },
      replies: [
        {
          date: { whenCommented: "yesterday" },
          answer: {
            text: "Numbers or tingling in your feet should be reported to your doctior at your regular visits.",
            votes: 8
          },
          user: {
            name: "Tom",
            avatar: "http://hairandbeautylagos.com/wp-content/uploads/2013/10/classic-cuts-men.jpg"
          }
        },
        {
          date: { whenCommented: "yesterday" },
          answer: {
            text: "Numbers or tingling in your feet should be reported to your doctior at your regular visits.",
            votes: 12
          },
          user: {
            name: "Orson",
            avatar: "http://www.goldwell.pl/fileadmin/_processed_/csm_Mens-Reshade_Benefits_With-men-reshade_e10d689fae.jpg"
          }
        },
        {
          date: { whenCommented: "yesterday" },
          answer: {
            text: "Numbers or tingling in your feet should be reported to your doctior at your regular visits.",
            votes: 1
          },
          user: {
            name: "Julia",
            avatar: "http://www.behairstyles.com/wp-content/uploads/Medium+Hairstyles+For+50+Year+Old+Woman-628x890.jpg"
          }
        }
      ]
    }
    return (
      <div className="allAnswers">
        <div className="howManyAnswers"><span className="allAnswers_number">{this.props.answers.howMany}</span>peers already answered</div>
        <Answer showModal={this.props.showModal} content={answer}/>

      </div>
    );
  }
}
Answers.defaultProps = {
  answers: { howMany: 2 }
};

export default Answers;