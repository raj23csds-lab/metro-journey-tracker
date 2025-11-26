import React from 'react';

const Notification = ({ message, show }) => {
    return (
        <div className={`share-notification ${show ? 'show' : ''}`}>
            {message}
        </div>
    );
};

export default Notification;
