import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import QuestionDetails from './QuestionDetails';
import IconButton from 'material-ui/IconButton';
import './allQuestionsHeader.css';
import './allQuestionsBody.css';
import AppHeader from '../common/AppHeader';

class AllQuestions extends React.Component {
  renderLoadMore() {
    return (
      <div className="all_questions_load_more">
        {"load more questions"}
      </div>
    )
  }
  renderContent() {
    return (
      <div className="all_questions">
        <QuestionDetails onUserClick={this.props.onUserClick}/>
        <QuestionDetails onUserClick={this.props.onUserClick} />
        <QuestionDetails onUserClick={this.props.onUserClick} />
        <QuestionDetails onUserClick={this.props.onUserClick} />
        {this.renderLoadMore()};
      </div>
    )
  }
  render() {
    return (
      <div className="app_body">
        <AppHeader history={this.props.history} isSingleQuestion={false} />
        <div className="app_content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

AllQuestions.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default AllQuestions;