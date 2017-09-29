import React from 'react';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import QuestionDetails from './QuestionDetails';
import IconButton from 'material-ui/IconButton';
import './allQuestionsHeader.css';
import './allQuestionsBody.css';
import AppHeader from '../common/AppHeader';

class AllQuestions extends React.Component {
  // renderHeader() {
  //   return (
  //     <div className="app_top_section search_header">
  //       <div className="question_and_sort">
  //         <div className="search_header_return_arrow">
  //           <IconButton aria-label="return" onClick={()=>{this.props.history.goBack()}}>
  //             <ArrowLeft />
  //           </IconButton>
  //         </div>
  //         <div className="add_question">
  //           <p>Question</p>
  //           <IconButton aria-label="Add" onClick={() => { }} className="add_button">
  //             <Icon>add_circle</Icon>
  //           </IconButton>
  //         </div>
  //         <div className="search_header_question_details">
  //           <form>
  //             <div>
  //               <input type="radio" name="sortBy" value="My shelf" checked />My shelf
  //             </div>
  //             <div>
  //               <input type="radio" name="sortBy" value="All questions" />All questions
  //             </div>
  //           </form>
  //         </div>
  //         <div className="search_header_sort_by">
  //           <div className="search_header_sorting">
  //             <span>Sort by:</span>
  //             <a href="#" className="currentSelection">recent</a>
  //             <span>or</span>
  //             <a href="#">hot</a>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="search">
  //         <form>
  //           <input type="text" name="search" placeholder="Search questions" />
  //           <button>Search</button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
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
        <AppHeader history={this.props.history} isSingleQuestion={false} />
        <div className="app_content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default AllQuestions;