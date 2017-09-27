import React from 'react';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import QuestionDetails from './QuestionDetails';
import './allQuestions.css';

class AllQuestions extends React.Component {
  renderHeader() {
    return (
      <div className="app_top_section search_header">
        <div className="question_and_sort">
          <div className="search_header_return_arrow">
            <ArrowLeft />
          </div>
          <div className="add_question">
            <div>
              <p>Question</p>
            </div>
            <div>
              <Icon>add_circle</Icon>
            </div>
          </div>
          <div className="search_header_question_details">
            <p>My shelf</p>
            <p>All questions</p>
          </div>
          <div className="search_header_sort_by">
            <p>Sort by: recent or hot</p>
          </div>
        </div>
        <div className="search">
          <form>
            <input type="text" name="search" />
            <button>Search</button>
          </form>
        </div>
      </div>
    );
  }
  renderLoadMore() {
    return (
      <div className="all_questions_load_more">
        {"load more"}
      </div>
    )
  }
  renderContent() {
    return (
      <div className="all_questions">
        <QuestionDetails />
        <QuestionDetails />
        <QuestionDetails />
        <QuestionDetails />
        {this.renderLoadMore()}
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

export default AllQuestions;