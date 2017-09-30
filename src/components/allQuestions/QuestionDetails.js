import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../common/avatar/Avatar';
import './questionDetails.css';
import './questionDetailsItem.css';
import { Link } from 'react-router-dom';

class QuestionDetails extends React.Component {
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
      <div className="question_details_header">
        <div className="question_details_avatar centered_avatar">
          <Avatar onClick={this.props.onUserClick} src={this.props.question.user.avatar} props="profile_pic" />
        </div>
        <div className="question_details_mainQuestion">
          {whoIsAsking()}
          <Link to={`/question/${this.props.questionId}`} className="clickable_text user_question">
            {this.props.question.title}
          </Link>
        </div>
      </div>
    )
  }
  renderBody = () => {
    return (
      <div className="question_details_body">
        <div className="question_details_content">
          <div className="item item_asked" >
            <div className="item_status">
              ASKED
              <div className="item_status_circle" />
            </div>
          </div>
          <div className="item more_activities">
            <div className="more_activities_count">
              <p className="bold_number_small">3</p>
            </div>
            <div className="item_status">
              <span className="info_text">more activities</span>
              <div className="item_status_circle" />
            </div>
          </div>
          <div className="item commented">
            <Avatar onClick={this.props.onUserClick} src="http://placecorgi.com/300/300" />
            <div className="item_status">
              COMMENTED
              <div className="item_status_circle" />
            </div>
          </div>
          <div className="item commented">
            <Avatar onClick={this.props.onUserClick} src="http://placecorgi.com/240/240" />
            <div className="item_status">
              COMMENTED
              <div className="item_status_circle" />
            </div>
          </div>
          <div className="item commented">
            <Avatar onClick={this.props.onUserClick} src="http://placecorgi.com/100/300" />
            <div className="item_status">
              COMMENTED
              <div className="item_status_circle" />
            </div>
          </div>
          <div className="item answered">
            <Avatar onClick={this.props.onUserClick} src="http://placecorgi.com/70/70" />
            <div className="item_status">
              ANSWERED
              <div className="item_status_circle" />
            </div>
          </div>
        </div>
        <div className="question_details_popularity">
          <div className="question_details_popularity_item">
            <span className="bold_number_small">{this.props.question.statistics.related} </span>
            <span className="info_text">related discussion </span>
          </div>
          <div className="question_details_popularity_item">
            <span className="bold_number_small">{this.props.question.statistics.peers} </span>
            <span className="info_text">peers involved</span>
          </div>
          <div className="question_details_popularity_item">
            <span className="bold_number_small">{this.props.question.statistics.conversations} </span>
            <span className="info_text">conversations</span>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="question_details">
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}

QuestionDetails.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  question: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default QuestionDetails;