import React from 'react';
import './answer.css';
import Avatar from '../../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';
import { VerticalDivider } from '../../common/divider/Divider';

class Answer extends React.Component {
  renderAnswer(isReply) {
    const space = isReply ? <div className="empty_space single_question_row_empty_space" /> : null;
    const middleItemClass = isReply ? "single_question_row_middle_item" : "single_question_row_middle_item_long";
    return (
      <div className="single_question_row">
        {space}
          <div className="centered_avatar single_question_row_left_item">
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" props="profile_pic" />
          </div>
          <VerticalDivider />
          <div className={middleItemClass}>
            <div className="todo_class_for_single_question_row_middle_item_content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   </p>
            </div>
          </div>
          <div className="answerVotesContainer single_question_row_right_item">
            <div className="votes">
              <p>19 upvotes</p>
              <div className="arrows">
                <ArrowUp />
                <ArrowDown />
              </div>

            </div>
        </div>
      </div>
    )
  }

  renderReply() {
    return this.renderAnswer(true);
  }
  render() {
    return (
      <div className="answer">
        {this.renderAnswer()}
        {this.renderReply()}
        {this.renderReply()}
      </div>
    );
  }
}

export default Answer;