import React from 'react';
import './profile.css';
import './profile_header.css';
import './profile_content.css';
import './profile_footer.css';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import ArrowRight from 'material-ui-icons/KeyboardArrowRight';
import Stars from 'material-ui-icons/Stars';
import Close from 'material-ui-icons/Clear';
import Avatar from '../common/avatar/Avatar';
import IconButton from 'material-ui/IconButton';
import PropTypes from 'prop-types';

class Profile extends React.Component {
  closeModalWindow = () => {
    this.props.closeModalWindow();
    this.props.history.push('/');
  }
  renderHeader = () => {
    return (
      <div className="profileHeader">
        <div className="profileCloseButton">
          <IconButton aria-label="Close" onClick={this.closeModalWindow} >
            <Close />
          </IconButton>
        </div>
        <div className="profileAvatar">
          <Avatar size="big" src={this.props.user.avatar} />
          <p>{this.props.user.name}</p>
        </div>
        <div className="profileActivity">
          <div className="profileActivityItem">
            <p className="profileActivityItemName subTitle">Member for</p>
            <p className="profileActivityItemValue">{this.props.user.memberFor.number} {this.props.user.memberFor.howMany}</p>
          </div>
          <div className="profileActivityItem">
            <p className="profileActivityItemName subTitle">Last seen</p>
            <p className="profileActivityItemValue">{this.props.user.lastSeen}</p>
          </div>
          <div className="profileActivityItem">
            <p className="profileActivityItemName subTitle">Activity level</p>
            <div className="profileActivityItemValue">
              <Stars />
              <Stars />
              <Stars />
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderBody = () => {
    let newPeople = this.props.newPeople;
    let people = newPeople.map(person => {
      return (
        <div className="person">
          <div className="personAvatar">
            <Avatar src={person.avatarURL} />
          </div>
          <p>{person.name}</p>
        </div>
      )
    });
    return (
      <div className="profileBody">
        <div className="navigationTable">
          <ArrowLeft />
          <p>How it all started</p>
          <ArrowRight />
        </div>
        <div className="profileStatistics">
        <div className="subTitle">That's where we have been these {this.props.user.memberFor.number} {this.props.user.memberFor.howMany} ago</div>
          <div className="profileStatisticsData">
            <div className="square peers">
              <p className="peers_text"><span className="statistic_numbers">{this.props.user.statisticData.peers}</span>peers</p>
            </div>
            <div className="square discussions">
              <p className="discussions_text"><span className="statistic_numbers">{this.props.user.statisticData.discussion}</span>discussions</p>
            </div>
            <div className="square findings">
              <p className="findings_text"><span className="statistic_numbers">{this.props.user.statisticData.findings}</span>findings</p>
            </div>
            <div className="square questions">
              <p className="questions_text"><span className="statistic_numbers">{this.props.user.statisticData.questions}</span>questions</p>
            </div>
          </div>
        </div>
        <div className="newPeople">
          <div className="subTitle">Who joined the platform that same period</div>
          <div className="people">
            {people}
          </div>
        </div>
      </div>
    )
  }
  renderFooter = () => {
    return (
      <div className="profileFooter">
        <div className="hottest_discussion_title">
          <h3 className="subTitle hottest_discussion_description">The hottest discussion these days</h3>
          <div className="hottest_discussion_avatar">
            <Avatar src="https://www.digitalsurgeons.com/images/uploads/authors/rsz_1kiss_from_a_rose-1.jpg" />
          </div>
        </div>
        <div className="hottest_discussion_statistics">
          <div className="hottest_discussion_article">
            <div className="hottest_discussion_author">
              <p className="person_name">{this.props.hottestDiscussion.autor.name}</p>
              <span className="subTitle">{this.props.hottestDiscussion.autor.subName}</span>
            </div>
            <p className="hottest_discussion_article_title title_name">{this.props.hottestDiscussion.title}</p>
          </div>
          <div className="hottest_discussion_article_details">
            <div className="hottest_discussion_article_details_item hottest_discussion_article_details_item_related_peers">
              <p className="statistic_numbers">{this.props.hottestDiscussion.statisticData.peers}</p>
              <p className="description">peers involved</p>
            </div>
            <div className="hottest_discussion_article_details_item">
              <p className="statistic_numbers">{this.props.hottestDiscussion.statisticData.relatedDiscussion}</p>
              <p className="description">related discussion</p>
            </div>
            <div className="hottest_discussion_article_details_item">
              <p className="statistic_numbers">{this.props.hottestDiscussion.statisticData.conversations}</p>
              <p className="description">conversations</p>
            </div>
            <div className="hottest_discussion_article_details_item hottest_discussion_article_details_item_related_upvotes">
              <p className="statistic_numbers">{this.props.hottestDiscussion.statisticData.upvotes}</p>
              <p className="description">upvotes</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="profileContainer">
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </div>
    )
  }
}

Profile.defaultProps = {
  user: {
    name: "Dr. Halima",
    avatar: "http://www.wsp-pb.com/Globaln/WSP-Canada/Who%20We%20Are/Sustainability/2016/Claire.jpg",
    memberFor: { number: 5, howMany: "months" },
    lastSeen: "Saturday afternoon",
    activityLevel: 3,
    statisticData: { peers: 46, discussion: 29, findings: 19, questions: 10 }
  },
  newPeople: [
    { name: "S.E.N Waweru", avatarURL: "https://gl-images.condecdn.net/image/9QP64MA4XvK/crop/200/square" },
    { name: "Patricia", avatarURL: "http://www.trbimg.com/img-56dcb867/turbine/bal-baltimore-people-on-the-move-march-20160306/200/200x200" },
    { name: "Joseph Aluoch", avatarURL: "http://www.trbimg.com/img-57015a41/turbine/bal-baltimore-people-on-the-move-april-20160403/200/200x200" }
  ],
  hottestDiscussion: {
    autor: { name: "Andrew", subName: "Found the Guardian Article" },
    title: "Vegan diet to stop diabetes progress",
    statisticData: { peers: 6, relatedDiscussion: 3, conversations: 3, upvotes: 19 }
  }
};

Profile.propTypes = {
  closeModalWindow: PropTypes.func.isRequired
};

export default Profile;