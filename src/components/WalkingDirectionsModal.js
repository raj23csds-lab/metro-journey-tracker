import React from 'react';
import { walkingDirections } from '../data/constants';
import { translations } from '../data/translations';
import { openInMaps } from '../utils/helpers';

const WalkingDirectionsModal = ({ station, place, currentLanguage, onClose }) => {
    const t = translations[currentLanguage];

    const getWalkingDirections = () => {
        const directions = walkingDirections[station]?.[place];
        if (!directions) {
            return {
                isGeneric: true,
                place
            };
        }
        return {
            isGeneric: false,
            ...directions
        };
    };

    const directions = getWalkingDirections();

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (directions.isGeneric) {
        return (
            <div 
                style={{
                    position: 'fixed', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)', 
                    zIndex: 1000, 
                    display: 'flex',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    padding: '20px'
                }}
                onClick={handleOverlayClick}
            >
                <div 
                    style={{
                        background: 'white', 
                        maxWidth: '500px', 
                        width: '100%',
                        borderRadius: '16px', 
                        maxHeight: '90vh', 
                        overflowY: 'auto',
                        padding: '20px', 
                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                        <h3 style={{ margin: 0, color: '#333' }}>{t.walkingDirections}</h3>
                        <button 
                            onClick={onClose}
                            style={{
                                background: 'none', 
                                border: 'none', 
                                fontSize: '24px',
                                cursor: 'pointer', 
                                color: '#999'
                            }}
                        >
                            ×
                        </button>
                    </div>
                    <div style={{ marginTop: '15px', padding: '16px', background: '#f5f5f5', borderRadius: '12px', borderLeft: '4px solid #9e9e9e' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#616161' }}>
                            🚶 {t.walkingTo} {place}
                        </h4>
                        <p style={{ margin: '8px 0', fontSize: '14px', color: '#666' }}>
                            {t.genericDirections} {place}. {t.askStaff}
                        </p>
                        <button 
                            onClick={() => openInMaps(place)}
                            style={{
                                marginTop: '10px', 
                                padding: '10px 16px', 
                                background: '#4285f4',
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '6px', 
                                cursor: 'pointer'
                            }}
                        >
                            🗺️ {t.openInMaps}
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div 
            style={{
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%',
                background: 'rgba(0,0,0,0.5)', 
                zIndex: 1000, 
                display: 'flex',
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '20px'
            }}
            onClick={handleOverlayClick}
        >
            <div 
                style={{
                    background: 'white', 
                    maxWidth: '500px', 
                    width: '100%',
                    borderRadius: '16px', 
                    maxHeight: '90vh', 
                    overflowY: 'auto',
                    padding: '20px', 
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <h3 style={{ margin: 0, color: '#333' }}>{t.walkingDirections}</h3>
                    <button 
                        onClick={onClose}
                        style={{
                            background: 'none', 
                            border: 'none', 
                            fontSize: '24px',
                            cursor: 'pointer', 
                            color: '#999'
                        }}
                    >
                        ×
                    </button>
                </div>
                <div style={{ marginTop: '15px', padding: '16px', background: '#fff8e1', borderRadius: '12px', borderLeft: '4px solid #ffa726', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#e65100', display: 'flex', alignItems: 'center' }}>
                        <span style={{ fontSize: '20px', marginRight: '8px' }}>🚶</span>
                        {t.walkingTo} {place}
                    </h4>
                    <div style={{ display: 'flex', gap: '15px', marginBottom: '12px', fontSize: '14px' }}>
                        <div style={{ background: 'white', padding: '8px 12px', borderRadius: '6px', flex: 1 }}>
                            <div style={{ color: '#666', fontSize: '12px' }}>{t.distance}</div>
                            <div style={{ fontWeight: 'bold', color: '#e65100' }}>{directions.distance}</div>
                        </div>
                        <div style={{ background: 'white', padding: '8px 12px', borderRadius: '6px', flex: 1 }}>
                            <div style={{ color: '#666', fontSize: '12px' }}>{t.time}</div>
                            <div style={{ fontWeight: 'bold', color: '#e65100' }}>{directions.duration}</div>
                        </div>
                        <div style={{ background: 'white', padding: '8px 12px', borderRadius: '6px', flex: 1 }}>
                            <div style={{ color: '#666', fontSize: '12px' }}>{t.exit}</div>
                            <div style={{ fontWeight: 'bold', color: '#e65100', fontSize: '12px' }}>{directions.exit}</div>
                        </div>
                    </div>
                    <div style={{ margin: '12px 0' }}>
                        <div style={{ fontWeight: '600', marginBottom: '8px', color: '#333' }}>📍 {t.directions}:</div>
                        <ol style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                            {directions.steps.map((step, idx) => (
                                <li key={idx} style={{ margin: '5px 0' }}>{step}</li>
                            ))}
                        </ol>
                    </div>
                    <div style={{ marginTop: '12px', padding: '10px', background: 'white', borderRadius: '6px' }}>
                        <div style={{ fontWeight: '600', marginBottom: '5px', color: '#333' }}>🏛️ {t.landmarks}:</div>
                        <div style={{ fontSize: '13px', color: '#555' }}>
                            {directions.landmarks.map((lm, idx) => (
                                <div key={idx}>• {lm}</div>
                            ))}
                        </div>
                    </div>
                    <button 
                        onClick={() => openInMaps(place)}
                        style={{
                            marginTop: '12px', 
                            width: '100%', 
                            padding: '10px', 
                            background: '#4285f4',
                            color: 'white', 
                            border: 'none', 
                            borderRadius: '6px', 
                            cursor: 'pointer',
                            fontWeight: '600'
                        }}
                    >
                        🗺️ {t.openInMaps}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WalkingDirectionsModal;
