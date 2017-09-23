import React from 'react';
import './profile.css';
import { HorizontalDivider } from '../common/divider/Divider';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import ArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Close from 'material-ui-icons/Clear';
import Avatar from '../common/avatar/Avatar';

class Profile extends React.Component {
  renderHeader = () => {
    return (
      <div className="profileHeader">
        <div className="profileCloseButton">
          <Close />
        </div>
        <div className="profileAvatar">
          <Avatar src="http://www.wsp-pb.com/Globaln/WSP-Canada/Who%20We%20Are/Sustainability/2016/Claire.jpg" />
          <h2>Dr. Halima</h2>
        </div>
        <div className="profileActivity">
          <p><span className="subTitle">Member for</span> 5 months</p>
          <p><span className="subTitle">Last seen</span> Saturday afternoon</p>
          <p className="subTitle">Activity level</p>
        </div>
      </div>
    )
  }
  renderBody = () => {
    return (
      <div className="profileBody">
        <div className="navigationTable">
          <ArrowLeft />
          <h2>How it all started</h2>
          <ArrowRight />
        </div>
        <div className="profileStatistics">
          <div className="subTitle">That's where we have been these 5 months</div>
          <div className="activityData">
            <div className="square peers">
              <p className="peers_text">46 peers</p>
            </div>
            <div className="square discussions">
              <p className="discussions_text">29 discussions</p>
            </div>
            <div className="square findings">
              <p className="findings_text">19 findings</p>
            </div>
            <div className="square questions">
              <p className="questions_text">10 questions</p>
            </div>
          </div>
        </div>
        <div className="newPeople">
          <div className="subTitle">Who joined the platform that same period</div>
          <div className="people">
            <div className="person">
              <div className="profilePic">
                <Avatar src="https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" />
              </div>
              <h3>S.E.N Waweru</h3>
            </div>
            <div className="person">
              <div className="profilePic">
                <Avatar src="http://www.trbimg.com/img-56dcb867/turbine/bal-baltimore-people-on-the-move-march-20160306/200/200x200" />
              </div>
              <h3>Patricia</h3>
            </div>
            <div className="person">
              <div className="profilePic">
                <Avatar src="http://www.trbimg.com/img-57015a41/turbine/bal-baltimore-people-on-the-move-april-20160403/200/200x200" />
              </div>
              <h3>Joseph Aluoch</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderFooter = () => {
    return (
      <div className="profileFooter">
        <h3 className="subTitle hottest_discussion_title">The hottest discussion these days</h3>
        <div className="hottest_discussion">
          <Avatar src="https://www.digitalsurgeons.com/images/uploads/authors/rsz_1kiss_from_a_rose-1.jpg" />
          <h5>Andrew<span className="subTitle"> Found the Guardian Article</span></h5>
          <h4>Vegan diet to stop diabetes progress</h4>
        </div>
        <div className="hottest_discussion_details">
          <div>6 peers involved</div>
          <div>3 related discussion</div>
          <div>3 conversations</div>
          <div>19 upvotes</div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="profileContainer">
        {this.renderHeader()}
        <HorizontalDivider />
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    )
  }
}

export default Profile;