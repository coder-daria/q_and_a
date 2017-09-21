import React from 'react';
import Modal from 'react-modal';
import Profile from '../profile/Profile';
import './modalWindow.css';

class ModalWindow extends React.Component {
  render() {
    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        height: "90%"
      },
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
        isOpen={false}
        style={customStyles}
      >
        <Profile />
      </Modal>
    )
  }
}
export default ModalWindow;