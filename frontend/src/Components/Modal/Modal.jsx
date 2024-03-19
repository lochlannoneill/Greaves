import React from 'react';
import './Modal.css'; // Import CSS file for modal styling

const Modal = ({ message }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Modal;
