import React from 'react';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import QuestionDetails from './QuestionDetails';
import './allQuestions.css';

class AllQuestions extends React.Component {
  renderHeader = () => {
    return (
      <div className="app_top_section search_header">
        <div className="question_and_sort">
          <ArrowLeft />
          <div className="add_question">
            <div>
              <p>Question</p>
            </div>
            <div>
              <Icon>add_circle</Icon>
            </div>
          </div>
          <ul className="question_details">
            <li>My shelf</li>
            <li>All questions</li>
            <li>Sort by: recent or hot</li>
          </ul>
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
  renderContent = () => {
    return (
      <div className="single_question">
        <QuestionDetails />
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