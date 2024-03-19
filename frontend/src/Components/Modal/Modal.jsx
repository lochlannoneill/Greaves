import React from 'react';
import './Modal.css';

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
