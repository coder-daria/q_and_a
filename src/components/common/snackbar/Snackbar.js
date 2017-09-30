import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

const SnackbarMessage = (props) => {
  return (
    <div>
        <Snackbar
          open={props.isOpen}
          message={props.message}
        />
      </div>
  );
};

SnackbarMessage.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default SnackbarMessage;