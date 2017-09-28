import React from 'react';
import './answer.css';
import Avatar from '../../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';

class Answer extends React.Component {
  renderAnswer(isReply) {
    const space = isReply ? <div className="empty_space single_question_row_empty_space reply" /> : null;
    return (
      <div className="single_question_row main_answer">
        {space}
        <div className="centered_avatar single_question_row_left_item">
          <Avatar showModal={this.props.showModal} src={this.props.user.avatar_url} props="profile_pic" />
          <p className="whoCommented"><span className="clickable_user_name" onClick={this.props.showModal}>{this.props.user.name}</span><span className="subTitle">commented it</span><span className="when">{this.props.date.whenCommented}</span></p>
        </div>
        <div className="single_question_row_middle_item">
          <div className="answer_header">
            <p className="whoCommented"><span className="clickable_user_name" onClick={this.props.showModal}>{this.props.user.name}</span><span className="subTitle">commented it</span><span className="when">{this.props.date.whenCommented}</span></p>
            <p>{this.props.user.answer}</p>
          </div>
        </div>
        <div className="single_question_row_right_item">
          <div className="votes">
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
        <button>CONTINUE discussion</button>
      </div>
    )
  }

  renderReply() {
    return this.renderAnswer(true);
  }
  render() {
    return (
      <div className="answerContainer">
        <div className="answer">
          {this.renderAnswer()}
          {this.renderReply()}
        </div>
        {this.renderStickyChild()}
      </div>
    );
  }
}
 Answer.defaultProps = {
   date: {whenCommented:  "yesterday"},
   user: {
     name: "Robert",
     avatar_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3AnlaspR6f3tPP8qfO1vrdnoDmNul8DL5yVMShsJW5SKtUQEKQ",
     answer:"Numbers or tingling in your feet should be reported to your doctior at your regular visits.", 
     votes : 8
    }
 };

export default Answer;