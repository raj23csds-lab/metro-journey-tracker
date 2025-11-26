import React from 'react';
import { stationLines, allStations } from '../data/constants';
import { translations, stationNamesKannada } from '../data/translations';

const RouteForm = ({ 
    source, 
    destination, 
    time, 
    onSourceChange, 
    onDestinationChange, 
    onTimeChange, 
    onFindRoute,
    currentLanguage 
}) => {
    const t = translations[currentLanguage];

    const getStationName = (englishName) => {
        return (currentLanguage === 'kn' && stationNamesKannada[englishName]) 
            ? stationNamesKannada[englishName] 
            : englishName;
    };

    return (
        <>
            <label htmlFor="source">{t.sourceStation}</label>
            <select 
                id="source" 
                value={source} 
                onChange={(e) => onSourceChange(e.target.value)}
            >
                {allStations.map(st => {
                    const lines = stationLines[st] || [];
                    const lineInfo = lines.length > 1 ? ` (${t.interchange})` : "";
                    const displayName = getStationName(st);
                    return (
                        <option key={st} value={st}>
                            {displayName}{lineInfo}
                        </option>
                    );
                })}
            </select>

            <label htmlFor="destination">{t.destinationStation}</label>
            <select 
                id="destination" 
                value={destination} 
                onChange={(e) => onDestinationChange(e.target.value)}
            >
                {allStations.map(st => {
                    const lines = stationLines[st] || [];
                    const lineInfo = lines.length > 1 ? ` (${t.interchange})` : "";
                    const displayName = getStationName(st);
                    return (
                        <option key={st} value={st}>
                            {displayName}{lineInfo}
                        </option>
                    );
                })}
            </select>

            <label htmlFor="time">{t.enterTime}</label>
            <input 
                type="time" 
                id="time" 
                value={time} 
                onChange={(e) => onTimeChange(e.target.value)} 
            />

            <button onClick={onFindRoute}>{t.findRoute}</button>
        </>
    );
};

export default RouteForm;
