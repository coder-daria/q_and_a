import React from 'react';
import './answer.css';
import Avatar from '../../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';
import { VerticalDivider } from '../../common/divider/Divider';

class Answer extends React.Component {
  render() {
    return (
      <div className="answerContainer single_question_row">
        <div className="centered_avatar single_question_row_left_item">
          <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" props="profile_pic" />
        </div>
        <div className="single_question_row_middle_item">
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
    );
  }
}

export default Answer;