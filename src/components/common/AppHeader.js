import React from 'react';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';

class AppHeader extends React.Component {

  renderHeaderRightPart(isSingleQuestion) {
    if(isSingleQuestion){
      return (
        <div className="last_discussed">
            <p>Last time discussed<span className="number">{this.props.timeSinceLastChange.unit}</span>{this.props.timeSinceLastChange.time}</p>
          </div>
      )
    } else {
      return (
        <div className="search_header_sort_by">
            <div className="search_header_sorting">
              <span>Sort by:</span>
              <a href="#" className="currentSelection">recent</a>
              <span>or</span>
              <a href="#">hot</a>
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
                <input type="radio" name="sortBy" value="My shelf" checked />My shelf
              </div>
              <div>
                <input type="radio" name="sortBy" value="All questions" />All questions
              </div>
            </form>
          </div>
          {this.renderHeaderRightPart(singleQuestionHeader)}
        </div>
        <div className={`search ${singleQuestionHeader}`}>
          <form>
            <input type="text" name="search" placeholder="Search questions" />
            <button>Search</button>
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