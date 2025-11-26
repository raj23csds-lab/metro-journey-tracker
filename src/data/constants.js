export const greenLine = ["Nagasandra", "Dasarahalli", "Jalahalli", "Peenya Industry", "Peenya", "Goraguntepalya", "Yeshwanthpur", "Sandal Soap Factory", "Mahalaxmi", "Rajajinagar", "Kuvempu Road", "Srirampura", "Majestic", "Chickpete", "K.R. Market", "National College", "Lalbagh", "South End Circle", "Jayanagar", "R.V. Road", "Banashankari", "J.P. Nagar", "Yelechenahalli"];

export const purpleLine = ["Mysore Road", "Deepanjali Nagar", "Attiguppe", "Vijayanagar", "Hosahalli", "Magadi Road", "Majestic", "Sir M. Vishweshwaraiah", "Vidhana Soudha", "Cubbon Park", "M.G. Road", "Trinity", "Halasuru", "Indiranagar", "Swami Vivekananda Road", "Baiyappanahalli"];

export const allStations = [...new Set([...greenLine, ...purpleLine])].sort();

export const stationLines = {};
greenLine.forEach(st => { 
    if (!stationLines[st]) stationLines[st] = []; 
    stationLines[st].push("Green"); 
});
purpleLine.forEach(st => { 
    if (!stationLines[st]) stationLines[st] = []; 
    stationLines[st].push("Purple"); 
});

export const placesData = {
    "M.G. Road": [
        { name: "Brigade Road", type: "Shopping", address: "Near MG Road", distance: "150 m", review: "⭐️⭐️⭐️⭐️" }, 
        { name: "Garuda Mall", type: "Mall", address: "Magrath Road", distance: "0.5 km", review: "⭐️⭐️⭐️⭐️" }, 
        { name: "Cubbon Park", type: "Park", address: "Cubbon Road", distance: "0.7 km", review: "⭐️⭐️⭐️⭐️⭐️" }, 
        { name: "Church Street", type: "Entertainment", address: "Church Street", distance: "500 m", review: "⭐️⭐️⭐️⭐️" }
    ],
    "Indiranagar": [
        { name: "100 Feet Road", type: "Shopping", address: "Indiranagar", distance: "300 m", review: "⭐️⭐️⭐️⭐️⭐️" }, 
        { name: "CMH Road", type: "Entertainment", address: "Indiranagar", distance: "600 m", review: "⭐️⭐️⭐️⭐️" }, 
        { name: "Indiranagar Club", type: "Recreation", address: "Club Road", distance: "0.8 km", review: "⭐️⭐️⭐️⭐️" }
    ],
    "Majestic": [
        { name: "Kempegowda Bus Station", type: "Transport", address: "Majestic", distance: "100 m", review: "⭐️⭐️⭐️" }, 
        { name: "Railway Station", type: "Transport", address: "Majestic", distance: "200 m", review: "⭐️⭐️⭐️⭐️" }, 
        { name: "City Market", type: "Shopping", address: "Near Majestic", distance: "0.5 km", review: "⭐️⭐️⭐️" }
    ]
};

export const stationCoordinates = {
    "Majestic": { lat: 12.9767, lon: 77.5719 },  
    "M.G. Road": { lat: 12.9759, lon: 77.6061 },  
    "Indiranagar": { lat: 12.9783, lon: 77.6408 },  
    "Yeshwanthpur": { lat: 13.0281, lon: 77.5376 },  
    "Banashankari": { lat: 12.9250, lon: 77.5480 },  
    "Vidhana Soudha": { lat: 12.9796, lon: 77.5909 },  
    "Cubbon Park": { lat: 12.9764, lon: 77.5984 },  
    "J.P. Nagar": { lat: 12.9081, lon: 77.5858 },  
    "Baiyappanahalli": { lat: 12.9989, lon: 77.6566 }
};

export const walkingDirections = {
    "M.G. Road": {
        "Brigade Road": { exit: "Exit A (South)", distance: "150 m", duration: "2 mins", steps: ["Exit from Exit A (South side of the station)", "Turn right on M.G. Road", "Walk straight for 100m", "Brigade Road will be on your left"], landmarks: ["Starbucks on corner", "Barista Coffee visible"] },
        "Garuda Mall": { exit: "Exit B (North)", distance: "500 m", duration: "6 mins", steps: ["Exit from Exit B (North side)", "Turn left on M.G. Road", "Walk straight for 300m", "Turn right on Magrath Road", "Garuda Mall will be on your right after 200m"], landmarks: ["Ebony Restaurant on the way", "HDFC Bank at corner"] },
        "Cubbon Park": { exit: "Exit C (West)", distance: "700 m", duration: "9 mins", steps: ["Exit from Exit C (West side)", "Walk towards Kasturba Road", "Cross the road at traffic signal", "Enter Cubbon Park from Gate 5"], landmarks: ["High Court visible", "State Library nearby"] }
    },
    "Indiranagar": {
        "100 Feet Road": { exit: "Exit A (Main)", distance: "300 m", duration: "4 mins", steps: ["Exit from Exit A", "Turn left on 12th Main Road", "Walk straight for 200m", "100 Feet Road intersection ahead"], landmarks: ["Subway restaurant nearby", "Big Bazaar visible"] },
        "CMH Road": { exit: "Exit B", distance: "600 m", duration: "8 mins", steps: ["Exit from Exit B", "Turn right on Old Madras Road", "Walk 400m straight", "Turn left at HAL 2nd Stage signal", "CMH Road is 200m ahead"], landmarks: ["Chinmaya Mission Hospital visible", "Forum Mall nearby"] }
    },
    "Majestic": {
        "City Market": { exit: "Exit D (East)", distance: "500 m", duration: "7 mins", steps: ["Exit from Exit D towards K.R. Market side", "Walk straight on Gubbi Thotadappa Road", "Cross the junction", "City Market complex will be on your right"], landmarks: ["Bus stand on left", "Railway station behind you"] },
        "Railway Station": { exit: "Exit A (North)", distance: "200 m", duration: "3 mins", steps: ["Exit from Exit A", "Walk straight towards station building", "Enter through main entrance"], landmarks: ["Kempegowda statue in front", "Food court visible"] }
    }
};

export const WEATHER_API_KEY = 'https://openweathermap.org/api';
