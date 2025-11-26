import React, { useState } from 'react';
import { placesData } from '../data/constants';
import { translations } from '../data/translations';
import WalkingDirectionsModal from './WalkingDirectionsModal';

const NearbyPlaces = ({ station, currentLanguage }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedPlace, setSelectedPlace] = useState(null);
    
    const t = translations[currentLanguage];

    if (!station) return null;

    const places = placesData[station] || [
        { name: `${station} Mall`, type: "Mall", address: `Near ${station} Metro`, distance: "0.8 km", review: "⭐️⭐️⭐️" },
        { name: "Metro Cafe", type: "Cafe", address: `Exit Gate, ${station}`, distance: "200 m", review: "⭐️⭐️⭐️⭐️" },
        { name: `${station} Park`, type: "Park", address: `Station Road, ${station}`, distance: "0.5 km", review: "⭐️⭐️⭐️" }
    ];
    
    const categories = [...new Set(places.map(p => p.type))];
    const displayedPlaces = selectedCategory 
        ? places.filter(p => p.type === selectedCategory)
        : places;

    const handleShowDirections = (placeName) => {
        setSelectedPlace(placeName);
        setShowModal(true);
    };

    return (
        <>
            <h3 id="h3-places">{t.nearbyPlaces}</h3>
            <div className="filter-btns" id="filterBtns">
                {categories.map(c => (
                    <button 
                        key={c}
                        onClick={() => setSelectedCategory(c)}
                        className={selectedCategory === c ? 'active' : ''}
                        id={`btn-${c}`}
                    >
                        {t[c.toLowerCase().replace(/\s/g, '')] || c}
                    </button>
                ))}
            </div>
            <div className="places-wrap" id="places">
                {displayedPlaces.map((p, idx) => (
                    <div key={idx} className='place'>
                        <b>{p.name}</b> ({t[p.type.toLowerCase().replace(/\s/g, '')] || p.type})<br/>
                        📍 {p.address} — {p.distance}<br/>
                        {t.review}: {p.review}<br/>
                        <button 
                            onClick={() => handleShowDirections(p.name)}
                            style={{
                                marginTop: '12px', 
                                padding: '10px 16px', 
                                background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
                                color: 'white', 
                                border: 'none', 
                                borderRadius: '10px',
                                cursor: 'pointer', 
                                fontSize: '14px', 
                                width: '100%',
                                fontWeight: '600',
                                boxShadow: '0 3px 10px rgba(249, 115, 22, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 5px 15px rgba(249, 115, 22, 0.5)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 3px 10px rgba(249, 115, 22, 0.3)';
                            }}
                        >
                            🚶 {t.walkingDirections}
                        </button>
                    </div>
                ))}
            </div>
            {showModal && (
                <WalkingDirectionsModal 
                    station={station}
                    place={selectedPlace}
                    currentLanguage={currentLanguage}
                    onClose={() => setShowModal(false)}
                />
            )}
        </>
    );
};

export default NearbyPlaces;
