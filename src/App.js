import React, { useState, useEffect } from 'react';
import './index.css';
import LanguageToggle from './components/LanguageToggle';
import RouteForm from './components/RouteForm';
import RouteOutput from './components/RouteOutput';
import JourneyTracker from './components/JourneyTracker';
import NearbyPlaces from './components/NearbyPlaces';
import WeatherDisplay from './components/WeatherDisplay';
import EmergencyBox from './components/EmergencyBox';
import PackingAlert from './components/PackingAlert';
import MusicPlayer from './components/MusicPlayer';
import Notification from './components/Notification';
import { translations, stationNamesKannada } from './data/translations';
import { allStations } from './data/constants';
import { findRoute, estimateCrowd, getWeather, saveLangToStorage, getLangFromStorage } from './utils/helpers';

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [source, setSource] = useState(allStations[0]);
  const [destination, setDestination] = useState(allStations[1]);
  const [time, setTime] = useState('');
  const [routeData, setRouteData] = useState(null);
  const [routeInfo, setRouteInfo] = useState(null);
  const [weather, setWeather] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);
  const [packingResponse, setPackingResponse] = useState(null);
  const [playerContent, setPlayerContent] = useState('');
  const [notification, setNotification] = useState({ show: false, message: '' });

  const t = translations[currentLanguage];

  const getStationName = (englishName) => {
    return (currentLanguage === 'kn' && stationNamesKannada[englishName]) 
      ? stationNamesKannada[englishName] 
      : englishName;
  };

  useEffect(() => {
    const savedLang = getLangFromStorage();
    if (savedLang) {
      setCurrentLanguage(savedLang);
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      if (browserLang.startsWith('kn')) {
        setCurrentLanguage('kn');
      }
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'en' ? 'kn' : 'en';
    setCurrentLanguage(newLang);
    saveLangToStorage(newLang);
  };

  const handleFindRoute = async () => {
    const routeResult = findRoute(source, destination);
    const numStops = routeResult.route.length - 1;
    let fare = numStops * 10 + 10;
    if (source === destination) fare = 10;

    const travelTime = numStops * 2;
    const [h, m] = time ? time.split(":").map(Number) : [new Date().getHours(), new Date().getMinutes()];
    const arrival = new Date();
    arrival.setHours(h);
    arrival.setMinutes(m + travelTime);
    const arrivalStr = arrival.toTimeString().slice(0, 5);
    const crowdLevelKey = estimateCrowd(time);

    const data = {
      src: source, 
      dest: destination, 
      fare: fare, 
      duration: travelTime, 
      stops: numStops, 
      arrivalTime: arrivalStr,
      crowdKey: crowdLevelKey, 
      interchange: routeResult.interchange, 
      time: time
    };

    setRouteData(data);
    setRouteInfo(routeResult);

    // Fetch weather
    setWeatherLoading(true);
    setWeather(null);
    try {
      const weatherData = await getWeather(destination);
      setWeather(weatherData);
    } catch (error) {
      console.error('Failed to load weather:', error);
    } finally {
      setWeatherLoading(false);
    }
  };

  const handlePackingAcknowledge = (ready) => {
    if (ready) {
      setPackingResponse({
        ready: true,
        message: "Great! Have a safe and enjoyable metro journey!"
      });
    } else {
      setPackingResponse({
        ready: false,
        message: "Please pack all your essentials before you leave. Safety first!"
      });
    }
  };

  const handleShowPlaylist = (type) => {
    if (type === 'spotify') {
      setPlayerContent(
        `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" 
         width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>`
      );
    }
  };

  const showNotification = (message) => {
    setNotification({ show: true, message });
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <div className="App">
      <LanguageToggle currentLanguage={currentLanguage} onToggle={toggleLanguage} />
      
      <h1 id="mainTitle">🚇 {t.title}</h1>
      
      <div className="container">
        <RouteForm 
          source={source}
          destination={destination}
          time={time}
          onSourceChange={setSource}
          onDestinationChange={setDestination}
          onTimeChange={setTime}
          onFindRoute={handleFindRoute}
          currentLanguage={currentLanguage}
        />
        
        {!routeData && (
          <div style={{
            marginTop: '30px',
            padding: '40px 20px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
            borderRadius: '16px',
            border: '2px dashed rgba(102, 126, 234, 0.3)'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚇</div>
            <p style={{ color: '#667eea', fontSize: '18px', fontWeight: '600', margin: 0 }}>
              Select your route to begin your journey
            </p>
            <p style={{ color: '#9ca3af', fontSize: '14px', marginTop: '8px' }}>
              Choose source, destination, and time to see route details
            </p>
          </div>
        )}

        <RouteOutput 
          routeData={routeData}
          currentLanguage={currentLanguage}
          onShowNotification={showNotification}
        />

        {weather && (
          <WeatherDisplay 
            weather={weather}
            stationName={getStationName(destination)}
            currentLanguage={currentLanguage}
            loading={false}
          />
        )}

        {weatherLoading && (
          <WeatherDisplay 
            weather={null}
            stationName={getStationName(destination)}
            currentLanguage={currentLanguage}
            loading={true}
          />
        )}

        {routeData && (
          <>
            <h3 id="h3-tracker">{t.journeyTracker}</h3>
            <JourneyTracker routeInfo={routeInfo} currentLanguage={currentLanguage} />
          </>
        )}

        {routeData && (
          <NearbyPlaces station={destination} currentLanguage={currentLanguage} />
        )}
      </div>

      <h2 id="h2-emergency">Emergency Contacts</h2>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <button 
          onClick={() => setShowEmergency(true)} 
          style={{ 
            width: '100%', 
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', 
            color: 'white',
            padding: '16px',
            fontSize: '18px',
            fontWeight: '700',
            boxShadow: '0 6px 20px rgba(239, 68, 68, 0.4)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(239, 68, 68, 0.6)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(239, 68, 68, 0.4)';
          }}
        >
          🚨 Emergency Helpline
        </button>
      </div>
      <EmergencyBox show={showEmergency} onHide={() => setShowEmergency(false)} />

      <PackingAlert 
        onAcknowledge={handlePackingAcknowledge}
        response={packingResponse}
      />

      <MusicPlayer 
        onShowPlaylist={handleShowPlaylist}
        playerContent={playerContent}
      />

      <footer>
        <p>&copy; 2025 Metro Assistant | Be Safe. Travel Smart. 💙</p>
      </footer>

      <Notification message={notification.message} show={notification.show} />
    </div>
  );
}

export default App;
