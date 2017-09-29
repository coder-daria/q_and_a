import React from 'react';
import './avatar.css';

class Avatar extends React.Component {
  render() {
    return (
      <div className={`avatar avatar-${this.props.size} ${this.props.className || ""}`} onClick={this.props.showModal}>
        <img alt={this.props.alt} src={this.props.src} />
      </div>
    )
  }
}

Avatar.defaultProps = {
  size: 'medium'
};
export default Avatar;