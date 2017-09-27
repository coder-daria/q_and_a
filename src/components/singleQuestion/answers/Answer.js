import React from 'react';
import './answer.css';
import Avatar from '../../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';

class Answer extends React.Component {
  renderAnswer(isReply) {
    const space = isReply ? <div className="empty_space single_question_row_empty_space reply" /> : null;
    return (
      <div className="single_question_row main_answer">
        {space}
        <div className="centered_avatar single_question_row_left_item">
          <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" props="profile_pic" />
          <p className="whoCommented">{this.props.user.name}<span className="subTitle">commented it</span><span className="when">{this.props.date.whenCommented}</span></p>
        </div>
        <div className="single_question_row_middle_item">
          <div className="answer_header">
            <p className="whoCommented">Robert <span className="subTitle">commented it</span><span className="when">{this.props.date.whenCommented}</span></p>
            <p>{this.props.user.answer}</p>
          </div>
        </div>
        <div className="single_question_row_right_item">
          <div className="votes">
            <div className="votesCounter">
              <p><span className="votes_number">{this.props.user.votes}</span>upvotes</p>
              <div className="arrows">
                <ArrowUp />
                <ArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderStickyChild() {
    return (
      <div className="sticky">
        <button>CONTINUE discussion</button>
      </div>
    )
  }

  renderReply() {
    return this.renderAnswer(true);
  }
  render() {
    return (
      <div className="answerContainer">
        <div className="answer">
          {this.renderAnswer()}
          {this.renderReply()}
        </div>
        {this.renderStickyChild()}
      </div>
    );
  }
}
 Answer.defaultProps = {
   date: {whenCommented:  "yesterday"},
   user: {name: "Robert", answer:"Numbers or tingling in your feet should be reported to your doctior at your regular visits.", votes : 8}
 };

export default Answer;