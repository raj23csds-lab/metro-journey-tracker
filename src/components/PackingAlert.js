import React from 'react';

const PackingAlert = ({ onAcknowledge, response }) => {
    return (
        <section id="packingAlert">
            <h2>🎒 Pre-Travel Check</h2>
            <p>Have you packed your mobile, charger, wallet, water, and metro card?</p>
            <div className="btn-group">
                <button onClick={() => onAcknowledge(true)} className="yes">✅ Yes, Ready!</button>
                <button onClick={() => onAcknowledge(false)} className="no">⚠️ Oops, Not Yet</button>
            </div>
            {response && (
                <p 
                    id="packingResponse" 
                    style={{ 
                        color: response.ready ? "#218838" : "#d32f2f",
                        marginTop: '10px'
                    }}
                >
                    {response.message}
                </p>
            )}
        </section>
    );
};

export default PackingAlert;
