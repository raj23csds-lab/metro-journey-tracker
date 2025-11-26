import React from 'react';

const LanguageToggle = ({ currentLanguage, onToggle }) => {
    return (
        <button 
            id="langToggle" 
            onClick={onToggle}
            style={{
                position: 'fixed', 
                top: '20px', 
                right: '20px', 
                padding: '10px 20px', 
                background: 'linear-gradient(90deg,#21409a,#235aaf)', 
                color: 'white', 
                border: 'none', 
                borderRadius: '20px', 
                cursor: 'pointer', 
                fontWeight: '600', 
                zIndex: '100', 
                boxShadow: '0 2px 10px rgba(33,64,154,0.3)', 
                fontSize: '14px'
            }}
        >
            {currentLanguage === 'en' ? 'ಕನ್ನಡ' : 'English'}
        </button>
    );
};

export default LanguageToggle;
