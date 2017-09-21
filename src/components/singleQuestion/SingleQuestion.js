import React from 'react';
import './singleQuestion.css';
import Question from './questions/Question';
import Answers from './answers/Answers';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';

class SingleQuestion extends React.Component {
  renderHeader = () => {
    return (
      <div className="app_top_section">
        <ArrowLeft />
        <div className="addQuestion">
          <div>
            <p>Question</p>
          </div>
          <div>
            <Icon>add_circle</Icon>
          </div>
        </div>
        <div className="lastInteraction">
          <p>Last time discussed 1 day ago</p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="app_body">
        {this.renderHeader()}
        <div className="app_content">
          <div className="single_question_question" >
            <Question />
          </div>
          <div className="single_question_answers" >
            <Answers />
          </div>
        </div>
      </div>
    );
  }
}

export default SingleQuestion;