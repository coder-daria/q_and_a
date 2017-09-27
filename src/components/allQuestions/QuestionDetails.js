import React from 'react';
import Question from '../singleQuestion/questions/Question';
import Avatar from '../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';
import './questionDetails.css';

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
          <div className="item item_asked"></div>
          <div className="item more_activities"></div>
          <div className="item commented">
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
            <p className="item_status">
              COMMENTED
            </p>
          </div>
          <div className="item commented">
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
          </div>
          <div className="item commented">
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
          </div>
          <div className="item commented">
            <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
          </div>
        </div>
        <div className="question_details_popularity">
            <p>{this.props.user.statisticData.relatedDiscussion} related discussion</p>
            <p>{this.props.user.statisticData.peersInvolved} peers involved</p>
            <p>{this.props.user.statisticData.conversations} conversations</p>
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