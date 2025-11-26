import React from 'react';

const LoadingSpinner = () => {
    return (
        <div style={{
            display: 'inline-block',
            width: '20px',
            height: '20px',
            border: '3px solid rgba(255,255,255,0.3)',
            borderRadius: '50%',
            borderTopColor: '#fff',
            animation: 'spin 0.8s linear infinite'
        }}>
            <style>
                {`
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `}
            </style>
        </div>
    );
};

export default LoadingSpinner;
