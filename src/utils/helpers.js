import { stationLines, greenLine, purpleLine, stationCoordinates, WEATHER_API_KEY } from '../data/constants';

export function findRoute(src, dest) {
    const srcLines = stationLines[src] || [];
    const destLines = stationLines[dest] || [];
    const commonLine = srcLines.find(line => destLines.includes(line));

    if (commonLine) {
        const line = commonLine === "Green" ? greenLine : purpleLine;
        const srcIdx = line.indexOf(src);
        const destIdx = line.indexOf(dest);
        const route = srcIdx < destIdx ? line.slice(srcIdx, destIdx + 1) : line.slice(destIdx, srcIdx + 1).reverse();
        return { route: route, line: commonLine, interchange: null };
    } else {
        const srcLine = srcLines[0];
        const destLine = destLines[0];
        const line1 = srcLine === "Green" ? greenLine : purpleLine;
        const line2 = destLine === "Green" ? greenLine : purpleLine;
        const srcIdx = line1.indexOf(src);
        const majesticIdx1 = line1.indexOf("Majestic");
        const majesticIdx2 = line2.indexOf("Majestic");
        const destIdx = line2.indexOf(dest);
        
        let route1 = srcIdx < majesticIdx1 ? line1.slice(srcIdx, majesticIdx1 + 1) : line1.slice(majesticIdx1, srcIdx + 1).reverse();
        let route2 = majesticIdx2 < destIdx ? line2.slice(majesticIdx2 + 1, destIdx + 1) : line2.slice(destIdx, majesticIdx2).reverse();
        
        return { route: [...route1, ...route2], line1: srcLine, line2: destLine, interchange: "Majestic" };
    }
}

export function estimateCrowd(time) {
    if (!time) return "PROMPT";
    const [h] = time.split(":").map(Number);
    if ((h >= 8 && h < 10) || (h >= 18 && h < 20)) return "HIGH";
    if (h >= 10 && h < 17) return "MEDIUM";
    return "LOW";
}

export async function getWeather(stationName) {
    const coords = stationCoordinates[stationName] || { lat: 12.9716, lon: 77.5946 };
    if (WEATHER_API_KEY === 'https://openweathermap.org/api') {
        return getSimulatedWeather();
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${WEATHER_API_KEY}&units=metric`
        );
        if (!response.ok) { throw new Error('Weather data not available'); }
        const data = await response.json();
        return formatWeatherData(data);
    } catch (error) {
        console.error('Weather fetch error:', error);
        return getSimulatedWeather();
    }
}

function formatWeatherData(data) {
    const weatherIcons = {
        'Clear': '☀️', 'Clouds': '☁️', 'Rain': '🌧️', 'Drizzle': '🌦️', 'Thunderstorm': '⛈️',
        'Snow': '❄️', 'Mist': '🌫️', 'Smoke': '🌫️', 'Haze': '🌫️', 'Fog': '🌫️'
    };
    return {
        temp: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        condition: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: weatherIcons[data.weather[0].main] || '🌡️'
    };
}

function getSimulatedWeather() {
    const conditions = [
        { temp: 28, feelsLike: 30, condition: 'Clear', description: 'clear sky', humidity: 60, windSpeed: 3.5, icon: '☀️' },
        { temp: 25, feelsLike: 26, condition: 'Clouds', description: 'few clouds', humidity: 70, windSpeed: 2.8, icon: '☁️' },
        { temp: 24, feelsLike: 25, condition: 'Rain', description: 'light rain', humidity: 85, windSpeed: 4.2, icon: '🌧️' }
    ];
    return conditions[Math.floor(Math.random() * conditions.length)];
}

export function saveLangToStorage(lang) {
    try { 
        document.cookie = `metro_lang=${lang}; path=/; max-age=31536000`; 
    } catch (e) { 
        console.warn('Could not save language preference'); 
    }
}

export function getLangFromStorage() {
    try {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'metro_lang') return value;
        }
    } catch (e) { 
        console.warn('Could not load language preference'); 
    }
    return null;
}

export function copyToClipboard(text, callback) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            callback();
        }).catch(err => {
            console.error('Failed to copy using clipboard API, trying fallback:', err);
            fallbackCopy(text, callback);
        });
    } else {
        fallbackCopy(text, callback);
    }
}

function fallbackCopy(text, callback) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed'; 
    textArea.style.left = '-999999px'; 
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            callback();
        } else {
            console.error('Legacy copy command failed.');
            alert('Could not copy. Please select and copy the text manually:\n\n' + text);
        }
    } catch (err) {
        console.error('Fallback copy failed:', err);
        alert('Could not copy. Please select and copy the text manually:\n\n' + text);
    }
    document.body.removeChild(textArea);
}

export function openInMaps(placeName) {
    const query = encodeURIComponent(placeName + " Bangalore");
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

    if (isMobile) {
        window.location.href = `geo:0,0?q=${query}`;
        setTimeout(() => {
            window.open(mapUrl, '_blank');
        }, 500);
    } else {
        window.open(mapUrl, '_blank');
    }
}
