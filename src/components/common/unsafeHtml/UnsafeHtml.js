import React from 'react';
import PropTypes from 'prop-types';
import './unsafeHtml.css'

const UnsafeHtml = (props) => {
  return (
    <div className="unsafe_html"dangerouslySetInnerHTML={{__html: props.content}}/>
  );
};

UnsafeHtml.propTypes = {
  content: PropTypes.string.isRequired,
};
export default UnsafeHtml;