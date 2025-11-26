import React from 'react';
import { translations, stationNamesKannada } from '../data/translations';
import { copyToClipboard } from '../utils/helpers';

const RouteOutput = ({ routeData, currentLanguage, onShowNotification }) => {
    if (!routeData) return null;

    const t = translations[currentLanguage];
    const { src, dest, stops, fare, duration, arrivalTime, interchange, crowdKey } = routeData;

    const getStationName = (englishName) => {
        return (currentLanguage === 'kn' && stationNamesKannada[englishName]) 
            ? stationNamesKannada[englishName] 
            : englishName;
    };

    const getLocalizedCrowd = (crowdLevelKey) => {
        if (crowdLevelKey === 'HIGH') return `🔴 ${t.highCrowd}`;
        if (crowdLevelKey === 'MEDIUM') return `🟡 ${t.mediumCrowd}`;
        if (crowdLevelKey === 'LOW') return `🟢 ${t.lowCrowd}`;
        return t.enterTimePrompt;
    };

    let interchangeMessage = <span className='badge ok'>{t.directRoute}</span>;
    if (interchange) {
        interchangeMessage = <span className='badge inter'>{t.interchangeAt} {getStationName(interchange)}</span>;
    }

    const shareJourney = () => {
        const shareText = `🚇 ${t.title}\n\n📍 From: ${getStationName(src)}\n📍 To: ${getStationName(dest)}\n🎫 ${t.fare}: ₹${fare}\n⏱️ ${t.duration}: ${duration} ${t.mins}\n🚉 ${t.stops}: ${stops}\n🕐 ${t.expectedArrival}: ${arrivalTime}\n${getLocalizedCrowd(crowdKey)}\n\nPlan your metro journey at Namma Metro Assistant!`;
        
        if (navigator.share) {
            navigator.share({ title: 'My Metro Journey', text: shareText })
            .catch((error) => {
                if (error.name !== 'AbortError') { 
                    copyToClipboard(shareText, () => onShowNotification(`${t.journeyCopied} 📋`));
                }
            });
        } else {
            copyToClipboard(shareText, () => onShowNotification(`${t.journeyCopied} 📋`));
        }
    };

    const shareViaWhatsApp = () => {
        const message = encodeURIComponent(`🚇 *${t.title}*\n\n📍 From: ${getStationName(src)}\n📍 To: ${getStationName(dest)}\n🎫 ${t.fare}: ₹${fare}\n⏱️ ${t.duration}: ${duration} ${t.mins}\n🚉 ${t.stops}: ${stops}\n🕐 ${t.expectedArrival}: ${arrivalTime}\n${getLocalizedCrowd(crowdKey)}\n\nPlan your trip at Namma Metro Assistant!`);
        window.open(`https://wa.me/?text=${message}`, '_blank');
    };

    const shareViaTwitter = () => {
        const tweet = encodeURIComponent(`Just planned my metro trip from ${getStationName(src)} to ${getStationName(dest)}! Only ${duration} ${t.mins} journey. Check out my route! 🚇 #NammaMetro #Bengaluru`);
        window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank');
    };

    return (
        <div className="output">
            <div className="route-card">
                <b>{t.route}:</b> {getStationName(src)} ➝ {getStationName(dest)} <br/>
                <b>{t.stops}:</b> {stops}<br/>
                <b>{t.fare}:</b> ₹{fare}<br/>
                <b>{t.duration}:</b> {duration} {t.mins}<br/>
                <b>{t.expectedArrival}:</b> {arrivalTime}<br/>
                <b>{t.crowd}:</b> {getLocalizedCrowd(crowdKey)}<br/>
                <b>{t.interchange}:</b> {interchangeMessage}
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button 
                    onClick={shareJourney} 
                    style={{ 
                        width: 'auto', 
                        flex: '1', 
                        minWidth: '140px',
                        padding: '12px 20px', 
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                        border: 'none', 
                        borderRadius: '12px', 
                        color: 'white', 
                        cursor: 'pointer', 
                        fontSize: '14px', 
                        fontWeight: '600',
                        boxShadow: '0 4px 15px rgba(16, 185, 129, 0.3)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.5)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.3)';
                    }}
                >
                    📤 Share
                </button>
                <button 
                    onClick={shareViaWhatsApp} 
                    style={{ 
                        width: 'auto', 
                        flex: '1', 
                        minWidth: '140px',
                        padding: '12px 20px', 
                        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', 
                        border: 'none', 
                        borderRadius: '12px', 
                        color: 'white', 
                        cursor: 'pointer', 
                        fontSize: '14px', 
                        fontWeight: '600',
                        boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.5)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.3)';
                    }}
                >
                    📱 WhatsApp
                </button>
                <button 
                    onClick={shareViaTwitter} 
                    style={{ 
                        width: 'auto', 
                        flex: '1', 
                        minWidth: '140px',
                        padding: '12px 20px', 
                        background: 'linear-gradient(135deg, #1DA1F2 0%, #0c7abf 100%)', 
                        border: 'none', 
                        borderRadius: '12px', 
                        color: 'white', 
                        cursor: 'pointer', 
                        fontSize: '14px', 
                        fontWeight: '600',
                        boxShadow: '0 4px 15px rgba(29, 161, 242, 0.3)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 161, 242, 0.5)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(29, 161, 242, 0.3)';
                    }}
                >
                    🐦 Twitter
                </button>
            </div>
        </div>
    );
};

export default RouteOutput;
