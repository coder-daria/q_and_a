import React from 'react';
import './singleQuestion.css';
import Question from './questions/Question';
import Answers from './answers/Answers';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import Modal from '../modalWindow/ModalWindow';

class SingleQuestion extends React.Component {
  renderHeader = () => {
    return (
      <div className="app_top_section">
        <div className="single_question_header">
          <div className="returnArrow">
            <ArrowLeft />
          </div>
          <div className="add_question">
            <p>Question</p>
            <Icon>add_circle</Icon>
          </div>
          <div className="last_discussed">
            <p>Last time discussed<span className="number"> 1 </span>day ago</p>
          </div>
        </div>
      </div>
    );
  }
  renderContent = () => {
    return (
      <div className="single_question">
        <Question />
        <Answers />
      </div>
    )
  }
  render() {
    return (
      <div className="app_body">
        {this.renderHeader()}
        <div className="app_content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default SingleQuestion;