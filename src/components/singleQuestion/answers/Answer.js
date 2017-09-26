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
          <p>Robert <span className="subTitle">commented it</span> <span className="when">yesterday</span></p>
        </div>
        <div className="single_question_row_middle_item">
          <div className="answer_header">
            <p>Robert commented it yesterday</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
          </div>
        </div>
        <div className="single_question_row_right_item">
          <div className="votes">
            <div className="votesCounter">
              <p><span className="votes_number">19</span> upvotes</p>
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

export default Answer;