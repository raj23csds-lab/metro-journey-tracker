import React from 'react';
import { translations } from '../data/translations';

const WeatherDisplay = ({ weather, stationName, currentLanguage, loading }) => {
    const t = translations[currentLanguage];

    if (loading) {
        return (
            <div style={{ marginTop: '15px', padding: '15px', background: '#f0f0f0', borderRadius: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '20px' }}>⏳</div>
                <div style={{ marginTop: '8px', color: '#666' }}>{t.loadingWeather} {stationName}...</div>
            </div>
        );
    }

    if (!weather) return null;

    const getWeatherAdvice = () => {
        let advice = '';
        if (weather.condition === 'Rain' || weather.condition === 'Drizzle') {
            advice = `<div style="margin-top:8px; padding:8px; background:rgba(255,255,255,0.2); border-radius:6px;">☂️ ${t.weatherAdviceUmbrella}</div>`;
        } else if (weather.temp > 32) {
            advice = `<div style="margin-top:8px; padding:8px; background:rgba(255,255,255,0.2); border-radius:6px;">🥵 ${t.weatherAdviceHot}</div>`;
        } else if (weather.temp < 20) {
            advice = `<div style="margin-top:8px; padding:8px; background:rgba(255,255,255,0.2); border-radius:6px;">🧥 ${t.weatherAdviceChilly}</div>`;
        } else if (weather.condition === 'Clear') {
            advice = `<div style="margin-top:8px; padding:8px; background:rgba(255,255,255,0.2); border-radius:6px;">😎 ${t.weatherAdvicePerfect}</div>`;
        }
        return advice;
    };

    return (
        <div style={{ marginTop: '15px', padding: '15px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white', boxShadow: '0 4px 15px rgba(102,126,234,0.4)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                    <div style={{ fontSize: '24px', marginBottom: '5px' }}>{weather.icon}</div>
                    <div style={{ fontSize: '14px', opacity: '0.9' }}>{t.weatherAt} {stationName}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{weather.temp}°C</div>
                    <div style={{ fontSize: '12px', opacity: '0.8' }}>{t.feelsLike} {weather.feelsLike}°C</div>
                </div>
            </div>
            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.3)', fontSize: '13px' }}>
                <div style={{ margin: '5px 0' }}>🌡️ {weather.description}</div>
                <div style={{ margin: '5px 0' }}>💧 {t.humidity}: {weather.humidity}%</div>
                <div style={{ margin: '5px 0' }}>💨 {t.wind}: {weather.windSpeed} m/s</div>
                <div dangerouslySetInnerHTML={{ __html: getWeatherAdvice() }} />
            </div>
        </div>
    );
};

export default WeatherDisplay;
