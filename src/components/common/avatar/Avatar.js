import React from 'react';
import './avatar.css';

class Avatar extends React.Component {
  render() {
    return (
      <div className={`avatar ${"avatar-" + this.props.size}`}>
        <img alt={this.props.alt} src={this.props.src} />
      </div>
    )
  }
}

Avatar.defaultProps = {
  size: 'medium'
};
export default Avatar;