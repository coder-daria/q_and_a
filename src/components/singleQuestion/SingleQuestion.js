import React from 'react';
import './singleQuestion.css';
import Question from './questions/Question';
import Answers from './answers/Answers';
import ArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Icon from 'material-ui/Icon';
import Modal from '../modalWindow/ModalWindow';
import IconButton from 'material-ui/IconButton';
import AppHeader from '../common/AppHeader';

class SingleQuestion extends React.Component {
  // renderHeader1 = () => {
  //   return (
  //     <div className="app_top_section search_header">
  //       <div className="single_question_header">
  //         <div className="search_header_return_arrow">
  //           <IconButton aria-label="return" onClick={() => { this.props.history.push('/') }} className="return_button">
  //             <ArrowLeft />
  //           </IconButton>
  //         </div>
  //         <div className="add_question">
  //           <p>Question</p>
  //           <IconButton aria-label="Add" onClick={() => { }} className="add_button">
  //             <Icon>add_circle</Icon>
  //           </IconButton>
  //         </div>
  //         <div className="last_discussed">
  //           <p>Last time discussed<span className="number">{this.props.timeSinceLastChange.unit}</span>{this.props.timeSinceLastChange.time}</p>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  // renderHeaderRightPart(isSingleQuestion) {
  //   if(isSingleQuestion){
  //     return (
  //       <div className="last_discussed">
  //           <p>Last time discussed<span className="number">{this.props.timeSinceLastChange.unit}</span>{this.props.timeSinceLastChange.time}</p>
  //         </div>
  //     )
  //   } else {
  //     return (
  //       <div className="search_header_sort_by">
  //           <div className="search_header_sorting">
  //             <span>Sort by:</span>
  //             <a href="#" className="currentSelection">recent</a>
  //             <span>or</span>
  //             <a href="#">hot</a>
  //           </div>
  //         </div>
  //     )
  //   }
  // }
  // renderHeader(flag) {
  //   const singleQuestionHeader = flag ? "hidden" : ""
  //   return (
  //     <div className="app_top_section search_header">
  //       <div className="question_and_sort">
  //         <div className="search_header_return_arrow">
  //           <IconButton aria-label="return" onClick={() => { this.props.history.goBack() }}>
  //             <ArrowLeft />
  //           </IconButton>
  //         </div>
  //         <div className="add_question">
  //           <p>Question</p>
  //           <IconButton aria-label="Add" onClick={() => { }} className="add_button">
  //             <Icon>add_circle</Icon>
  //           </IconButton>
  //         </div>
  //         <div className={`search_header_question_details ${singleQuestionHeader}`}>
  //           <form>
  //             <div>
  //               <input type="radio" name="sortBy" value="My shelf" checked />My shelf
  //             </div>
  //             <div>
  //               <input type="radio" name="sortBy" value="All questions" />All questions
  //             </div>
  //           </form>
  //         </div>
  //         {this.renderHeaderRightPart(singleQuestionHeader)}
  //       </div>
  //       <div className={`search ${singleQuestionHeader}`}>
  //         <form>
  //           <input type="text" name="search" placeholder="Search questions" />
  //           <button>Search</button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
  renderContent = () => {
    return (
      <div className="single_question">
        <Question showModal={this.props.showModal} history={this.props.history} />
        <Answers showModal={this.props.showModal} />
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

export default SingleQuestion;