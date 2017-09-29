import React from 'react';
import PropTypes from 'prop-types';
import Question from '../singleQuestion/questions/Question';
import Avatar from '../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';
import './questionDetails.css';
import './questionDetailsItem.css';

class QuestionDetails extends React.Component {
  renderHeader = () => {
    return (
      <div className="question_details_header">
        <div className="question_details_avatar centered_avatar">
          <Avatar onClick={this.props.onUserClick} src={this.props.user.avatar} props="profile_pic" />
        </div>
        <div className="question_details_mainQuestion">
          <p className="whoIsAsking">
            <span className="clickable_user_name person_name" onClick={this.props.onUserClick}>{this.props.user.name}</span>is asking:
          </p>
          <p className="user_question">{this.props.user.question}</p>
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
              more activities
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
            <p><span className="bold_number_small">{this.props.user.statisticData.relatedDiscussion} </span>related discussion</p>
          </div>
          <div className="question_details_popularity_item">
            <p><span className="bold_number_small">{this.props.user.statisticData.peersInvolved} </span>peers involved</p>
          </div>
          <div className="question_details_popularity_item">
            <p><span className="bold_number_small">{this.props.user.statisticData.conversations}</span> conversations</p>
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

QuestionDetails.defaultProps = {
  user: {
    name: "Eva",
    avatar: "http://placecorgi.com/200/200",
    question: "Will insulin make my patient gain weight?",
    statisticData: { relatedDiscussion: 1, peersInvolved: 6, conversations: 3 }
  }
};

QuestionDetails.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default QuestionDetails;