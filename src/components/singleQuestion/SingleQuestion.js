import React from 'react';
import PropTypes from 'prop-types';
import './singleQuestion.css';
import Question from './questions/Question';
import Answers from './answers/Answers';
import AppHeader from '../common/AppHeader';

class SingleQuestion extends React.Component {
  renderContent = () => {
    return (
      <div className="single_question">
        <Question onUserClick={this.props.onUserClick} history={this.props.history} />
        <Answers onUserClick={this.props.onUserClick} />
      </div>
    )
  }
  render() {
    return (
      <div className="app_body">
        <AppHeader history={this.props.history} isSingleQuestion={true} />
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
  history: PropTypes.object.isRequired,
};

export default SingleQuestion;