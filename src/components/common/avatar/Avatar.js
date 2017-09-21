import React from 'react';
import ImageAvatars from 'material-ui/Avatar';


class Avatar extends React.Component {
  render() {
    return <ImageAvatars alt={this.props.alt} src={this.props.src}/>
  }
}
export default Avatar;