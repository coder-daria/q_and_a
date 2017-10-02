import React from 'react';
import PropTypes from 'prop-types';
import './singleQuestion.css';
import Question from './questions/Question';
import Answers from './answers/Answers';
import AppHeaderContainer from '../common/AppHeaderContainer';
import { Redirect } from 'react-router-dom';

class SingleQuestion extends React.Component {

  componentDidMount() {
    if(this.props.questionToFetch){
      this.props.loadQuestion(this.props.questionToFetch.questionId);
    }
  }

  renderContent = () => {
    console.log(this.props.selectedQuestion);
    if(!this.props.selectedQuestion){
      return null;
    }
    return (
      <div className="single_question">
        <Question question={this.props.selectedQuestion} questionVotes={this.props.questionVotes} onUserClick={this.props.onUserClick} history={this.props.history} />
        <Answers question={this.props.selectedQuestion} answerVotes={this.props.answerVotes} onUserClick={this.props.onUserClick} />
      </div>
    )
  }

  render() {
    if(!this.props.questionToFetch) {
      console.log("Redirecting to...");
      return <Redirect to={"/"} />
    }
    return (
      <div className="app_body">
        <AppHeaderContainer isSingleQuestion={true} />
        <div className="app_content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

SingleQuestion.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  loadQuestion: PropTypes.func.isRequired,
  questionToFetch: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default SingleQuestion;