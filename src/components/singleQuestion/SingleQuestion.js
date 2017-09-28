import React from 'react';
import './singleQuestion.css';
import Question from './questions/Question';
import Answers from './answers/Answers';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import Modal from '../modalWindow/ModalWindow';
import IconButton from 'material-ui/IconButton';

class SingleQuestion extends React.Component {
  renderHeader = () => {
    return (
      <div className="app_top_section">
        <div className="single_question_header">
          <div className="returnArrow">
          <IconButton aria-label="Add" onClick={()=>{this.props.history.push('/')}} className="return_button">
            <ArrowLeft />
          </IconButton>
          </div>
          <div className="add_question">
            <p>Question</p>
            <IconButton aria-label="Add" onClick={()=>{}} className="add_button">
              <Icon>add_circle</Icon>
            </IconButton>
          </div>
          <div className="last_discussed">
            <p>Last time discussed<span className="number">{this.props.timeSinceLastChange.unit}</span>{this.props.timeSinceLastChange.time}</p>
          </div>
        </div>
      </div>
    );
  }
  renderContent = () => {
    return (
      <div className="single_question">
        <Question showModal={this.props.showModal} history={this.props.history} />
        <Answers showModal={this.props.showModal}/>
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

SingleQuestion.defaultProps = {
  timeSinceLastChange: { unit: 4, time: "days ago" }
};

export default SingleQuestion;