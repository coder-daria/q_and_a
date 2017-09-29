import React from 'react';
import PropTypes from 'prop-types';
import ArrowUp from 'material-ui-icons/KeyboardArrowUp';
import ArrowDown from 'material-ui-icons/KeyboardArrowDown';

const Voting = (props) => {
  return (
    <div className="votesCounter">
      <div className="voting_content">
        <span className="bold_number_small">{props.votes}</span>
        <span className="info_text">upvotes</span>
      </div>
      <div className="voting_arrows">
        <ArrowUp />
        <ArrowDown />
      </div>
    </div>
  );
};

Voting.propTypes = {
  votes: PropTypes.number.isRequired,
};

export default Voting;