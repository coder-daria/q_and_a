import React from 'react';
import './answer.css';
import Avatar from '../../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';
import PropTypes from 'prop-types';
import StickyButton from '../../common/StickyButton';
import Button from 'material-ui/Button';

class Answer extends React.Component {
  renderAnswer(content, isReply) {
    const space = isReply ? <div className="empty_space single_question_row_empty_space reply" /> : null;
    const replyTopBorder = isReply ? "border_top" : "";
    const whoCommented = (
      <div className="whoCommented">
        <span className="clickable_user_name person_name" onClick={this.props.showModal}>{content.user.name}</span>
        <span className="subTitle">commented it</span>
        <p className="small_circle" />
        <span className="info_text">{content.date.whenCommented}</span>
      </div>
    )
    return (
      <div className="single_question_row main_answer">
        {space}
        <div className={`centered_avatar single_question_row_left_item ${replyTopBorder}`}>
          <Avatar showModal={this.props.showModal} src={content.user.avatar} props="profile_pic" />
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
            <div className="votesCounter">
              <p><span className="bold_number_medium">{content.answer.votes}</span>upvotes</p>
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

  renderReply(reply) {
    return this.renderAnswer(reply, true);
  }
  renderReplies(replies) {
    return replies.map(reply => {
      return this.renderReply(reply);
    });
  }
  render() {
    return (
      <div className="answerContainer">
        <div className="answer">
          {this.renderAnswer(this.props.data)}
          {this.renderReplies(this.props.data.replies)}
        </div>
        <StickyButton text="CONTINUE discussion"/>
      </div>
    );
  }
}

Answer.propTypes = {
  showModal: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
export default Answer;