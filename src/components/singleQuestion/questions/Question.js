import React from 'react';
import './question.css';
import Avatar from '../../common/avatar/Avatar';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';

class Question extends React.Component {
  renderHeader = () => {
    return (
      <div className="single_question_row questionHeader">
        <div className="centered_avatar single_question_row_left_item">
          <Avatar src="http://slodive.com/wp-content/uploads/2012/11/funny-pug-pictures/funnypugpictures200.jpg" props="profile_pic" />
          <p>Eva is asking</p>
        </div>
        <div className="single_question_row_middle_item single_question_main_quesion">
          <p>Eva is asking</p>
          <h3>Will insulin make my patient gain weight?</h3>
        </div>
        <div className="single_question_row_right_item single_question_unfollow_header">
          <h4>unfollow</h4>
        </div>
      </div>
    )
  }
  renderBody = () => {
    return (
      <div className="single_question_row questionBody">
        <div className="single_question_row_left_item question_empty_space" />
        <div className="single_question_row_middle_item question_content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
        </div>
        <div className="single_question_row_right_item">
          <div className="votes">
            <p className="single_question_unfollow_body">unfollow</p>
            <div className="votesCounter">
              <p>19 upvotes</p>
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
        <button>hola hola hola</button>
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

export default Question;