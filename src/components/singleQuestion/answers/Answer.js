import React from 'react';
import PropTypes from 'prop-types';
import './answer.css';
import Avatar from '../../common/avatar/Avatar';
import StickyButton from '../../common/stickyButton/StickyButton';
import Voting from '../../common/voting/Voting';

class Answer extends React.Component {
  renderAnswer(content, isReply, index) {
    const space = isReply ? <div className="empty_space single_question_row_empty_space reply" /> : null;
    const replyTopBorder = isReply ? "border_top" : "";
    const whoCommented = (
      <div className="whoCommented">
        <span className="clickable_user_name person_name" onClick={this.props.onUserClick}>{content.user.name}</span>
        <span className="subTitle">commented it</span>
        <p className="small_circle" />
        <span className="info_text">{content.date.whenCommented}</span>
      </div>
    )
    return (
      <div key={index} className="single_question_row main_answer">
        {space}
        <div className={`centered_avatar single_question_row_left_item ${replyTopBorder}`}>
          <Avatar onClick={this.props.onUserClick} src={content.user.avatar} props="profile_pic" />
          {whoCommented}
        </div>
        <div className={`single_question_row_middle_item ${replyTopBorder}`}>
          <div className="answer_body">
            {whoCommented}
            <p className="answer_content">{content.answer.text}</p>
          </div>
        </div>
        <div className={`single_question_row_right_item ${replyTopBorder}`}>
          <div className="votes">
            <Voting votes={content.answer.votes} />
          </div>
      </div>
      </div>
    )
  }

  renderReply(reply, index) {
    return this.renderAnswer(reply, true, index);
  }
  renderReplies(replies) {
    return replies.map((reply, index) => {
      return this.renderReply(reply, index);
    });
  }
  render() {
    return (
      <div className="answerContainer">
        <div className="answer">
          {this.renderAnswer(this.props.data)}
          {this.renderReplies(this.props.data.replies)}
        </div>
        <StickyButton text="CONTINUE discussion" />
      </div>
    );
  }
}

Answer.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
export default Answer;