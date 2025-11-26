import React, { useEffect, useState } from 'react';
import { translations, stationNamesKannada } from '../data/translations';

const JourneyTracker = ({ routeInfo, currentLanguage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const t = translations[currentLanguage];

    const getStationName = (englishName) => {
        return (currentLanguage === 'kn' && stationNamesKannada[englishName]) 
            ? stationNamesKannada[englishName] 
            : englishName;
    };

    useEffect(() => {
        if (!routeInfo) return;

        setCurrentIndex(0);
        const interval = setInterval(() => {
            setCurrentIndex(prev => {
                if (prev >= routeInfo.route.length - 1) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [routeInfo]);

    if (!routeInfo) {
        return (
            <div className="tracker" style={{ 
                textAlign: 'center', 
                padding: '40px 20px',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)'
            }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🚉</div>
                <p style={{ color: '#667eea', fontWeight: '600', margin: 0 }}>
                    {t.selectRoute}
                </p>
            </div>
        );
    }

    const interchangeIdx = routeInfo.interchange ? routeInfo.route.indexOf(routeInfo.interchange) : -1;
    const isCompleted = currentIndex >= routeInfo.route.length - 1;

    return (
        <div className="tracker">
            {routeInfo.route.map((st, i) => {
                let lineIndicator = "";
                if (routeInfo.interchange) {
                    const lineName = i <= interchangeIdx ? routeInfo.line1 : routeInfo.line2;
                    lineIndicator = `[${lineName} ${t.route}]`;
                } else {
                    lineIndicator = `[${routeInfo.line} ${t.route}]`;
                }

                return (
                    <div key={i} className="station-step">
                        <div className={`dot ${i === currentIndex ? 'active' : ''}`}></div> 
                        {getStationName(st)}{i === interchangeIdx ? ' 🔄' : ''}
                        <span className="line-indicator">{lineIndicator}</span>
                    </div>
                );
            })}
            {isCompleted && (
                <p style={{ textAlign: 'center', marginTop: '10px' }}>
                    ✅ {t.trainReached}
                </p>
            )}
        </div>
    );
};

export default JourneyTracker;
