import React from 'react';
import PropTypes from 'prop-types';
import './answer.css';
import Avatar from '../../common/avatar/Avatar';
import StickyButton from '../../common/stickyButton/StickyButton';
import Voting from '../../common/voting/Voting';
import UnsafeHtml from '../../common/unsafeHtml/UnsafeHtml';
import moment from 'moment';

class Answer extends React.Component {
  renderAnswer(content, isReply, index) {
    console.log("tutaj " + content.statistics.score);
    const space = isReply ? <div className="empty_space single_question_row_empty_space reply" /> : null;
    const replyTopBorder = isReply ? "border_top" : "";
    const humanizedTime = moment(content.statistics.creationDate * 1000).fromNow();
    const whoCommented = (
      <div className="whoCommented">
        <span className="clickable_text person_name" onClick={this.props.onUserClick}>{content.user.name}</span>
        <span className="subTitle">commented it</span>
        <p className="small_circle" />
        <span className="info_text">{humanizedTime}</span>
      </div>
    )
    const answerOrCommentContent = isReply ? this.props.commentVotes: this.props.answerVotes;
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
            <div className="answer_content">
              <UnsafeHtml content={content.content} />
            </div>
          </div>
        </div>
        <div className={`single_question_row_right_item ${replyTopBorder}`}>
          <div className="votes">
            <Voting votes={content.statistics.score} 
              answerIndex={this.props.index}
              commentIndex={index}
              voting={answerOrCommentContent} />
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
          {this.renderAnswer(this.props.answer)}
          {this.renderReplies(this.props.answer.comments)}
        </div>
        <StickyButton text="CONTINUE discussion" />
      </div>
    );
  }
}

Answer.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  answer: PropTypes.object.isRequired,
};
export default Answer;