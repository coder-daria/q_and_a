import React from 'react';
import PropTypes from 'prop-types';
import './question.css';
import Avatar from '../../common/avatar/Avatar';
import StickyButton from '../../common/stickyButton/StickyButton';
import Voting from '../../common/voting/Voting';

class Question extends React.Component {
  renderHeader = () => {
    const whoIsAsking = className => {
      return (
        <div className={`whoIsAsking ${className || ""}`}>
          <span className="clickable_user_name person_name" onClick={this.props.onUserClick}>
            {this.props.user.name}
          </span>
          <span className="subTitle">is asking:</span>
        </div>);
    }
    return (
      <div className="single_question_row questionHeader">
        <div className="centered_avatar single_question_row_left_item">
          <Avatar src={this.props.user.avatar} props="profile_pic" onClick={this.props.onUserClick} />
          {whoIsAsking()}
        </div>
        <div className="single_question_row_middle_item single_question_main_question">
          {whoIsAsking("big-device")}
          <p className="user_question">{this.props.user.question}</p>
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
          <p>{this.props.user.questionDescription}</p>
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
    name: "Eva",
    avatar: "http://placecorgi.com/100/100",
    question: "Will insulin make my patient gain weight?",
    questionDescription: "All my patients with diabetes should see on opthalmologist yearly for a dialated beggining at diagnosis in people with type 2 diabetes, and after 5 years in people with type 1 diabetes after puberty.",
    unfollow: "unfollow",
    votes: 19
  }
};

Question.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default Question;