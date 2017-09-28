import React from 'react';
import './question.css';
import Avatar from '../../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';

class Question extends React.Component {
  toggleModalWindow = () => {
    this.props.showModal();
    this.props.history.push("/single_question/profile");
  }
  renderHeader = () => {
    const whoIsAsking = <p><span className="clickable_user_name" onClick={this.toggleModalWindow}>{this.props.user.name}</span><span className="subTitle">is asking:</span></p>;
    return (
      <div className="single_question_row questionHeader">
        <div className="centered_avatar single_question_row_left_item">
          <Avatar src={this.props.user.avatar} props="profile_pic" showModal={this.toggleModalWindow}/>
          {whoIsAsking}
        </div>
        <div className="single_question_row_middle_item single_question_main_question">
          {whoIsAsking}
          <p>{this.props.user.question}</p>
        </div>
        <div className="single_question_row_right_item single_question_unfollow_header">
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
            <p className="single_question_unfollow_body">{this.props.user.unfollow}</p>
            <div className="votesCounter">
              <p><span className="votes_number">{this.props.user.votes}</span>upvotes</p>
              <div className="arrows">
                <ArrowUp />
                <ArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  renderStickyChild() {
    return (
      <div className="sticky">
        <button>GIVE new answer</button>
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
        {this.renderStickyChild()}
      </div>
    );
  }
}

Question.defaultProps = {
  timeSinceLastChange: {unit: 4, time: "days ago"},
  user: { 
    name: "Eva",
    avatar: "https://www.mercer.com/content/dam/mercer/assets/content-images/wwt-pat_milligan.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg",
    question: "Will insulin make my patient gain weight?", 
    questionDescription: "All my patients with diabetes should see on opthalmologist yearly for a dialated beggining at diagnosis in people with type 2 diabetes, and after 5 years in people with type 1 diabetes after puberty.", 
    unfollow: "unfollow",
    votes: 19
  }
};

export default Question;