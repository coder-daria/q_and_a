import React from 'react';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import { Field } from 'redux-form'

class AppHeader extends React.Component {

  renderHeaderRightPart(isSingleQuestion) {
    if (isSingleQuestion) {
      return (
        <div className="last_discussed">
          <span className="info_text">Last time discussed</span>
          <span className="bold_number_small">{this.props.timeSinceLastChange.unit}</span>
          <span className="info_text">{this.props.timeSinceLastChange.time}</span>
        </div>
      )
    } else {
      const disableRecent = this.props.sortBy === "creation" ? "currentSelection" : ""
      const disableHot = this.props.sortBy === "hot" ? "currentSelection" : ""
      return (
        <div className="search_header_sort_by">
          <div className="search_header_sorting">
            <span className="info_text">Sort by:</span>
            <span className={`${disableRecent} clickable_text person_name`} onClick={() => this.props.changeSortBy("creation", this.props.currentPage)}>recent</span>
            <span className="info_text">or</span>
            <span className={`${disableHot} clickable_text person_name`} onClick={() => this.props.changeSortBy("hot", this.props.currentPage)}>hot</span>
          </div>
        </div>
      )
    }
  }
  renderHeader(flag) {
    const singleQuestionHeader = flag ? "hidden" : ""
    return (
      <div className="app_top_section search_header">
        <div className="question_and_sort">
          <div className="search_header_return_arrow">
            <IconButton aria-label="return" onClick={() => { this.props.history.goBack() }}>
              <ArrowLeft />
            </IconButton>
          </div>
          <div className="add_question">
            <p>Question</p>
            <IconButton aria-label="Add" onClick={() => { }} className="add_button">
              <Icon>add_circle</Icon>
            </IconButton>
          </div>
          <div className={`search_header_question_details ${singleQuestionHeader}`}>
            <form>
              <div>
                <input type="radio" name="sortBy" value="My shelf" defaultChecked />My shelf
              </div>
              <div>
                <input type="radio" name="sortBy" value="All questions" />All questions
              </div>
            </form>
          </div>
          {this.renderHeaderRightPart(singleQuestionHeader)}
        </div>
        <div className={`search ${singleQuestionHeader}`}>
          <form onSubmit={this.props.handleSubmit}>
            <Field
              name="search"
              component="input"
              type="text"
              placeholder="Search"
            />
            <button type="submit" disabled={this.props.pristine}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
  render() {
    return this.renderHeader(this.props.isSingleQuestion);
  }
}
AppHeader.defaultProps = {
  timeSinceLastChange: { unit: 4, time: "days ago" }
};

export default AppHeader;