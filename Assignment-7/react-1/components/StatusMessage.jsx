// StatusMessage.js
import React from 'react';

const StatusMessage = ({ status }) => {
    return (
        <div>
            {status === 'success' ? (
                <p>Operation was successful.</p>
            ) : status === 'error' ? (
                <p>There was an error.</p>
            ) : null}
        </div>
    );
};

export default StatusMessage;
