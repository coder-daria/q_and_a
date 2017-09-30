import React from 'react';
import PropTypes from 'prop-types';
import QuestionDetails from './QuestionDetails';
import './allQuestionsHeader.css';
import './allQuestionsBody.css';
import AppHeaderContainer from '../common/AppHeaderContainer';
import Button from 'material-ui/Button';

class AllQuestions extends React.Component {
  renderLoadMore() {
    return (
      <div className="all_questions_load_more">
        <Button color="accent" onClick={() => this.props.loadMore(this.props.sortBy)}>
          load more questions
    </Button>
      </div>
    )
  }
  renderContent() {
    const questions = this.props.questions.map((question, index) => {
      return (
        <QuestionDetails questionId={index} history={this.props.history} key={index} question={question} onUserClick={this.props.onUserClick} />
      )
    })
    return (
      <div className="all_questions">
        {questions}
        {this.renderLoadMore()}
      </div>
    )
  }
  render() {
    return (
      <div className="app_body">
        <AppHeaderContainer isSingleQuestion={false} />
        <div className="app_content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

AllQuestions.propTypes = {
  onUserClick: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
  history: PropTypes.object.isRequired,
  loadMore:  PropTypes.func.isRequired,
  sortBy:  PropTypes.string.isRequired
};

export default AllQuestions;