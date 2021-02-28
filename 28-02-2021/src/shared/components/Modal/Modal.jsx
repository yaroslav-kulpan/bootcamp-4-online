import React from 'react';

const Modal = ({children}) => {
    return (
        <>
            <div className="overlay"/>
            <div className="modal">
                {children}
            </div>
        </>
    );
};

export default Modal;