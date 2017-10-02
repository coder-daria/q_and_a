import React from 'react';
import PropTypes from 'prop-types';
import './singleQuestion.css';
import Question from './questions/Question';
import Answers from './answers/Answers';
import AppHeaderContainer from '../common/AppHeaderContainer';

class SingleQuestion extends React.Component {

  componentDidMount() {
    this.props.loadQuestion(this.props.questionId);
  }

  renderContent = () => {
    console.log(this.props.selectedQuestion);
    if(!this.props.selectedQuestion){
      return null;
    }
    return (
      <div className="single_question">
        <Question question={this.props.selectedQuestion} upVote={this.props.upVote} downVote={this.props.downVote} onUserClick={this.props.onUserClick} history={this.props.history} />
        <Answers question={this.props.selectedQuestion} onUserClick={this.props.onUserClick} />
      </div>
    )
  }
  render() {
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

SingleQuestion.defaultProps = {
  timeSinceLastChange: { unit: 4, time: "days ago" }
};

SingleQuestion.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  loadQuestion: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  selectedQuestion: PropTypes.object,
  history: PropTypes.object.isRequired,
};

export default SingleQuestion;