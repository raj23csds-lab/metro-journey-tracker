import React from 'react';

const EmergencyBox = ({ show, onHide }) => {
    if (!show) return null;

    return (
        <div id="emergencyBox" style={{ display: 'block' }}>
            <button className="close-btn" onClick={onHide}>✖</button>
            <h4>Emergency Contacts</h4>
            <p>🚓 Metro Security: <b>1800-123-4567</b></p>
            <p>🚑 Medical Help: <b>108</b></p>
            <p>🔥 Fire Service: <b>101</b></p>
            <p>📞 Women Helpline: <b>1091</b></p>
        </div>
    );
};

export default EmergencyBox;
