import React from 'react';
import PropTypes from 'prop-types';
import './question.css';
import Avatar from '../../common/avatar/Avatar';
import StickyButton from '../../common/stickyButton/StickyButton';
import Voting from '../../common/voting/Voting';
import UnsafeHtml from '../../common/unsafeHtml/UnsafeHtml';

class Question extends React.Component {
  renderHeader = () => {
    const whoIsAsking = className => {
      return (
        <div className={`whoIsAsking ${className || ""}`}>
          <span className="clickable_text person_name" onClick={this.props.onUserClick}>
            {this.props.question.user.name}
          </span>
          <span className="subTitle">is asking:</span>
        </div>);
    }
    return (
      <div className="single_question_row questionHeader">
        <div className="centered_avatar single_question_row_left_item">
          <Avatar src={this.props.question.user.avatar} props="profile_pic" onClick={this.props.onUserClick} />
          {whoIsAsking()}
        </div>
        <div className="single_question_row_middle_item single_question_main_question">
          {whoIsAsking("big-device")}
          <p className="user_question">{this.props.question.title}</p>
        </div>
        <div className="single_question_row_right_item single_question_unfollow_header person_name">
          <p>{this.props.user.unfollow}</p>
        </div>
      </div>
    )
  }
  renderBody = () => {
    return (
      <div className="single_question_row questionBody">
        <div className="single_question_row_left_item question_empty_space" />
        <div className="single_question_row_middle_item question_content">
          <UnsafeHtml content={this.props.question.content} />
        </div>
        <div className="single_question_row_right_item">
          <div className="votes">
            <p className="single_question_unfollow_body person_name">{this.props.user.unfollow}</p>
            <Voting votes={this.props.user.votes} />
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="questionContainer">
        <div className="question">
          {this.renderHeader()}
          {this.renderBody()}
        </div>
        <StickyButton text="GIVE new answer" />
      </div>
    );
  }
}

Question.defaultProps = {
  timeSinceLastChange: { unit: 4, time: "days ago" },
  user: {
    unfollow: "unfollow",
    votes: 19
  }
};

Question.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
};

export default Question;