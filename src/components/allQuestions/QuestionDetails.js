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
          <h4>Eva is asking</h4>
          <h3>Will insulin make my patient gain weight?</h3>
        </div>
        <div className="question_details_popularity">
        </div>
      </div>
    )
  }
  renderBody = () => {
    return (
      <div className="question_details_body">
        <div className="my_question_details_content">
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
          <div>
            <p>1 related discussion</p>
            <p>6 peers involved</p>
            <p>3 conversations</p>
          </div>
        </div>
      </div>
    )
  }
  render() {
    /*<div className="question_details_asked">
  <p>Asked</p>
</div>
<div className="question_details_content">
  <div className="question_details_content_box more_activities">
    <div className="profile_img">
     3
    </div>
    <div>
      more activities
      </div>
  </div>
  <div className="question_details_content_box">
    <div className="profile_img">
      <img src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
    </div>
    <div className="commented">
      Commented
      </div>
  </div>

  <div className="question_details_content_box">
    <div className="profile_img">
      <img src="http://www.trbimg.com/img-56dcb867/turbine/bal-baltimore-people-on-the-move-march-20160306/200/200x200" />
    </div>
    <div className="commented">
      Commented
      </div>
  </div>
  <div className="question_details_content_box">
    <div className="profile_img">
      <img src="http://www.trbimg.com/img-56dcb867/turbine/bal-baltimore-people-on-the-move-march-20160306/200/200x200" />
    </div>
    <div className="commented">
      Commented
      </div>
  </div>

  <div className="question_details_content_box">
    <div className="profile_img">
      <img src="http://www.trbimg.com/img-57015a41/turbine/bal-baltimore-people-on-the-move-april-20160403/200/200x200" />
    </div>
    <div className="answered">
      Answered
      </div>
  </div>
</div>
  */
    return (
      <div className="question">
        {this.renderHeader()}
        {this.renderBody()}
      </div>
    );
  }
}

export default QuestionDetails;