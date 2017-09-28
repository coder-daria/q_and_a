import React from 'react';
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
          <Avatar src="http://slodive.com/wp-content/uploads/2012/11/funny-pug-pictures/funnypugpictures200.jpg" props="profile_pic" />
        </div>
        <div className="question_details_mainQuestion">
          <h4>{this.props.user.name} is asking</h4>
          <h3>{this.props.user.question}</h3>
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
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
            <div className="item_status">
              COMMENTED
              <div className="item_status_circle" />
            </div>
          </div>
          <div className="item commented">
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
            <div className="item_status">
              COMMENTED
              <div className="item_status_circle" />
            </div>
          </div>
          <div className="item commented">
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
            <div className="item_status">
              COMMENTED
              <div className="item_status_circle" />
            </div>
          </div>
          <div className="item answered">
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
            <div className="item_status">
              ANSWERED
              <div className="item_status_circle" />
            </div>
          </div>
        </div>
        <div className="question_details_popularity">
          <div className="question_details_popularity_item">
            <p className="bold_number_small">{this.props.user.statisticData.relatedDiscussion}</p> related discussion
            </div>
          <div className="question_details_popularity_item">
            <p className="bold_number_small">{this.props.user.statisticData.peersInvolved}</p> peers involved
            </div>
          <div className="question_details_popularity_item">
            <p className="bold_number_small">{this.props.user.statisticData.conversations}</p> conversations
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
    question: "Will insulin make my patient gain weight?",
    statisticData: { relatedDiscussion: 1, peersInvolved: 6, conversations: 3 }
  }
};

export default QuestionDetails;