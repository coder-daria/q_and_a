import React from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';
import IconButton from 'material-ui/IconButton';

const Voting = (props) => {
  this.votes = () =>{
    return props.votes >= 0 ? "upvotes" : "downvotes";
  }
  this.convertNumberToPositiveValue = () =>{
    return props.votes >=0 ? props.votes : -(props.votes);
  }
  return (
    <div className="votesCounter">
      <div className="voting_content">
        <span className="bold_number_small">{this.convertNumberToPositiveValue()}</span>
        <span className="info_text">{this.votes()}</span>
      </div>
      <div className="voting_arrows">
        <IconButton aria-label="Up" onClick={props.upVote} >
          <ArrowUp />
        </IconButton>
        <IconButton aria-label="Down" onClick={props.downVote} >
          <ArrowDown />
        </IconButton>
      </div>
    </div>
  );
};

Voting.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default Voting;