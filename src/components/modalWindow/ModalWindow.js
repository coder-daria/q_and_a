import React from 'react';
import Modal from 'react-modal';
import Profile from '../profile/Profile';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

class ModalWindow extends React.Component {
  render() {
    return (
      <div>
        <MediaQuery maxWidth={767}>
        {this.renderPhone()}
        </MediaQuery>
        <MediaQuery minWidth={768} maxWidth={1200}>
        {this.renderIpad()}
        </MediaQuery>
        <MediaQuery minWidth={1201}>
          {this.renderComputer()}
        </MediaQuery>
      </div>
    )
  }

  renderWithCustomStyle(customContentStyle){
    const defaultContent= {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "60%",
      height: "90%",
      padding: 0
    };
    const contentStyle = Object.assign({}, defaultContent, customContentStyle);
    const modalStyles = {
      content: contentStyle,
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)'
      }
    };
    return (
      <Modal
        contentLabel="Profile"
        isOpen={this.props.showModal}
        style={modalStyles}
      >
        <Profile closeModalWindow={this.props.closeModalWindow} history={this.props.history}/>
      </Modal>
    )
  }

  renderIpad() {
    const customContentStyle = {
      width: "100%"
    };
    return this.renderWithCustomStyle(customContentStyle);
  }
  renderPhone() {
    const customContentStyle = {
      width: "100%",
      height: "100%"
    };
    return this.renderWithCustomStyle(customContentStyle);
  }

  renderComputer() {
    return this.renderWithCustomStyle();
  }
}
ModalWindow.propTypes = {
  closeModalWindow: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
export default ModalWindow;