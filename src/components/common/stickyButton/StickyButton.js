import Button from 'material-ui/Button';
import React from 'react';
import PropTypes from 'prop-types';
import './stickybutton.css';

const StickyButton = props => {
  return (
    <div className="sticky">
    <Button>
      {props.text}
    </Button>
  </div>
  )
}

StickyButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default StickyButton;