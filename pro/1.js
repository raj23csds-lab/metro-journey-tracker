 // ====================================================
        // LANGUAGE MODULE DATA AND STATE
        // ====================================================

        const translations = {
            en: {
                title: "Namma Metro Assistant", sourceStation: "Source Station:", destinationStation: "Destination Station:", enterTime: "Enter Time (HH:MM):", findRoute: "Find Route", route: "Route", stops: "Stops", fare: "Fare", duration: "Duration", expectedArrival: "Expected Arrival", crowd: "Crowd", interchange: "Interchange", directRoute: "Direct Route", interchangeAt: "Interchange at", journeyTracker: "Journey Tracker", selectRoute: "Select route to start tracking...", trainReached: "Train has reached destination!", nearbyPlaces: "Nearby Places", highCrowd: "High Crowd (Peak Hours)", mediumCrowd: "Medium Crowd", lowCrowd: "Low Crowd", enterTimePrompt: "Enter a time to see crowd level.", mins: "mins",
                // Places
                shopping: "Shopping", mall: "Mall", park: "Park", entertainment: "Entertainment", transport: "Transport", cafe: "Cafe", recreation: "Recreation", distance: "Distance", review: "Review",
                // Sharing & Walking
                journeyCopied: "Journey details copied to clipboard!", walkingDirections: "Walking Directions", walkingTo: "Walking to", exit: "Exit", time: "Time", directions: "Directions", landmarks: "Landmarks", openInMaps: "Open in Google Maps", genericDirections: "Exit the metro station and follow the signs to", askStaff: "Ask station staff for specific directions.",
                // Weather
                weatherAt: "Weather at", feelsLike: "Feels like", humidity: "Humidity", wind: "Wind", weatherAdviceUmbrella: "Don't forget your umbrella!", weatherAdviceHot: "It's hot! Stay hydrated.", weatherAdviceChilly: "Bit chilly! Carry a light jacket.", weatherAdvicePerfect: "Perfect weather for travel!", loadingWeather: "Loading weather for"
            },
            kn: {
                title: "ನಮ್ಮ ಮೆಟ್ರೋ ಸಹಾಯಕ", sourceStation: "ಮೂಲ ನಿಲ್ದಾಣ:", destinationStation: "ಗಮ್ಯಸ್ಥಾನ ನಿಲ್ದಾಣ:", enterTime: "ಸಮಯ ನಮೂದಿಸಿ (HH:MM):", findRoute: "ಮಾರ್ಗ ಹುಡುಕಿ", route: "ಮಾರ್ಗ", stops: "ನಿಲ್ದಾಣಗಳು", fare: "ದರ", duration: "ಅವಧಿ", expectedArrival: "ನಿರೀಕ್ಷಿತ ಆಗಮನ", crowd: "ಜನಸಂದಣಿ", interchange: "ಬದಲಾವಣೆ", directRoute: "ನೇರ ಮಾರ್ಗ", interchangeAt: "ಇಲ್ಲಿ ಬದಲಾವಣೆ", journeyTracker: "ಪ್ರಯಾಣ ಟ್ರ್ಯಾಕರ್", selectRoute: "ಟ್ರ್ಯಾಕಿಂಗ್ ಪ್ರಾರಂಭಿಸಲು ಮಾರ್ಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ...", trainReached: "ರೈಲು ಗಮ್ಯಸ್ಥಾನವನ್ನು ತಲುಪಿದೆ!", nearbyPlaces: "ಹತ್ತಿರದ ಸ್ಥಳಗಳು", highCrowd: "ಹೆಚ್ಚು ಜನಸಂದಣಿ (ಗರಿಷ್ಠ ಸಮಯ)", mediumCrowd: "ಮಧ್ಯಮ ಜನಸಂದಣಿ", lowCrowd: "ಕಡಿಮೆ ಜನಸಂದಣಿ", enterTimePrompt: "ಜನಸಂದಣಿ ಮಟ್ಟವನ್ನು ನೋಡಲು ಸಮಯವನ್ನು ನಮೂದಿಸಿ.", mins: "ನಿಮಿಷಗಳು",
                // Places
                shopping: "ಶಾಪಿಂಗ್", mall: "ಮಾಲ್", park: "ಉದ್ಯಾನವನ", entertainment: "ಮನರಂಜನೆ", transport: "ಸಾರಿಗೆ", cafe: "ಕೆಫೆ", recreation: "ಮನರಂಜನೆ", distance: "ದೂರ", review: "ಪರಿಶೀಲನೆ",
                // Sharing & Walking
                journeyCopied: "ಪ್ರಯಾಣದ ವಿವರಗಳನ್ನು ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ!", walkingDirections: "ನಡಿಗೆ ನಿರ್ದೇಶನಗಳು", walkingTo: "ಇಲ್ಲಿಗೆ ನಡಿಗೆ", exit: "ನಿರ್ಗಮನ", time: "ಸಮಯ", directions: "ನಿರ್ದೇಶನಗಳು", landmarks: "ಸ್ಥಳೀಯ ಹೆಗ್ಗುರುತುಗಳು", openInMaps: "ಗೂಗಲ್ ನಕ್ಷೆಗಳಲ್ಲಿ ತೆರೆಯಿರಿ", genericDirections: "ಮೆಟ್ರೋ ನಿಲ್ದಾಣದಿಂದ ನಿರ್ಗಮಿಸಿ ಮತ್ತು ಚಿಹ್ನೆಗಳನ್ನು ಅನುಸರಿಸಿ", askStaff: "ನಿರ್ದಿಷ್ಟ ನಿರ್ದೇಶನಗಳಿಗಾಗಿ ನಿಲ್ದಾಣದ ಸಿಬ್ಬಂದಿಯನ್ನು ಕೇಳಿ.",
                // Weather
                weatherAt: "ಹವಾಮಾನ", feelsLike: "ಅನಿಸುತ್ತದೆ", humidity: "ಆರ್ದ್ರತೆ", wind: "ಗಾಳಿ", weatherAdviceUmbrella: "ನಿಮ್ಮ ಛತ್ರಿ ಮರೆಯಬೇಡಿ!", weatherAdviceHot: "ಬಿಸಿ ಇದೆ! ಹೈಡ್ರೇಟ್ ಆಗಿರಿ.", weatherAdviceChilly: "ಚಳಿಯಿದೆ! ಲೈಟ್ ಜಾಕೆಟ್ ಕೊಂಡೊಯ್ಯಿರಿ.", weatherAdvicePerfect: "ಪ್ರಯಾಣಕ್ಕೆ ಸೂಕ್ತ ಹವಾಮಾನ!", loadingWeather: "ಹವಾಮಾನವನ್ನು ಲೋಡ್ ಮಾಡಲಾಗುತ್ತಿದೆ"
            }
        };

        const stationNamesKannada = {
            "Nagasandra": "ನಾಗಸಂದ್ರ", "Dasarahalli": "ದಾಸರಹಳ್ಳಿ", "Jalahalli": "ಜಾಲಹಳ್ಳಿ", "Peenya Industry": "ಪೀಣ್ಯ ಇಂಡಸ್ಟ್ರಿ", "Peenya": "ಪೀಣ್ಯ", "Goraguntepalya": "ಗೊರಗುಂಟೆಪಾಳ್ಯ", "Yeshwanthpur": "ಯಶವಂತಪುರ", "Sandal Soap Factory": "ಸ್ಯಾಂಡಲ್ ಸೋಪ್ ಫ್ಯಾಕ್ಟರಿ", "Mahalaxmi": "ಮಹಾಲಕ್ಷ್ಮಿ", "Rajajinagar": "ರಾಜಾಜಿನಗರ", "Kuvempu Road": "ಕುವೆಂಪು ರಸ್ತೆ", "Srirampura": "ಶ್ರೀರಾಮಪುರ", "Majestic": "ಮೆಜೆಸ್ಟಿಕ್", "Chickpete": "ಚಿಕ್ಕಪೇಟೆ", "K.R. Market": "ಕೆ.ಆರ್. ಮಾರ್ಕೆಟ್", "National College": "ನ್ಯಾಷನಲ್ ಕಾಲೇಜ್", "Lalbagh": "ಲಾಲ್ ಬಾಗ್", "South End Circle": "ಸೌತ್ ಎಂಡ್ ಸರ್ಕಲ್", "Jayanagar": "ಜಯನಗರ", "R.V. Road": "ಆರ್.ವಿ. ರೋಡ್", "Banashankari": "ಬನಶಂಕರಿ", "J.P. Nagar": "ಜೆ.ಪಿ. ನಗರ", "Yelechenahalli": "ಯಲಚೇನಹಳ್ಳಿ", "Mysore Road": "ಮೈಸೂರು ರಸ್ತೆ", "Deepanjali Nagar": "ದೀಪಾಂಜಲಿ ನಗರ", "Attiguppe": "ಅತ್ತಿಗುಪ್ಪೆ", "Vijayanagar": "ವಿಜಯನಗರ", "Hosahalli": "ಹೊಸಹಳ್ಳಿ", "Magadi Road": "ಮಗಡಿ ರಸ್ತೆ", "Sir M. Vishweshwaraiah": "ಸರ್ ಎಂ. ವಿಶ್ವೇಶ್ವರಯ್ಯ", "Vidhana Soudha": "ವಿಧಾನ ಸೌಧ", "Cubbon Park": "ಕಬ್ಬನ್ ಪಾರ್ಕ್", "M.G. Road": "ಎಂ.ಜಿ. ರೋಡ್", "Trinity": "ಟ್ರಿನಿಟಿ", "Halasuru": "ಹಲಸೂರು", "Indiranagar": "ಇಂದಿರಾನಗರ", "Swami Vivekananda Road": "ಸ್ವಾಮಿ ವಿವೇಕಾನಂದ ರಸ್ತೆ", "Baiyappanahalli": "ಬಯ್ಯಪ್ಪನಹಳ್ಳಿ"
        };
        
        let currentLanguage = 'en';

        function t(key) { return translations[currentLanguage][key] || key; }
        function getStationName(englishName) { return (currentLanguage === 'kn' && stationNamesKannada[englishName]) ? stationNamesKannada[englishName] : englishName; }
        function getLocalizedCrowd(crowdLevelKey) {
            const t = translations[currentLanguage];
            if (crowdLevelKey === 'HIGH') return `🔴 ${t.highCrowd}`;
            if (crowdLevelKey === 'MEDIUM') return `🟡 ${t.mediumCrowd}`;
            if (crowdLevelKey === 'LOW') return `🟢 ${t.lowCrowd}`;
            return t.enterTimePrompt;
        }
        
        function saveLangToStorage(lang) {
            try { document.cookie = `metro_lang=${lang}; path=/; max-age=31536000`; } catch (e) { console.warn('Could not save language preference'); }
        }
        function getLangFromStorage() {
            try {
                const cookies = document.cookie.split(';');
                for (let cookie of cookies) {
                    const [name, value] = cookie.trim().split('=');
                    if (name === 'metro_lang') return value;
                }
            } catch (e) { console.warn('Could not load language preference'); }
            return null;
        }
        function toggleLanguage() {
            currentLanguage = currentLanguage === 'en' ? 'kn' : 'en';
            saveLangToStorage(currentLanguage);
            applyLanguage(currentLanguage);
            populateStationDropdowns();
            if (document.querySelector('.route-card')) { showRoute(false); } // Re-run route without re-fetching weather
        }
        function applyLanguage(lang) {
            const t = translations[lang];
            document.querySelector('h1').textContent = `🚇 ${t.title}`;
            document.querySelector('label[for="source"]').textContent = t.sourceStation;
            document.querySelector('label[for="destination"]').textContent = t.destinationStation;
            document.querySelector('label[for="time"]').textContent = t.enterTime;
            document.querySelector('button[onclick="showRoute()"]').textContent = t.findRoute;
            document.getElementById('h3-tracker').textContent = t.journeyTracker;
            document.getElementById('h3-places').textContent = t.nearbyPlaces;
            const tracker = document.getElementById('tracker');
            const routeCardExists = document.querySelector('.route-card');
            if (!routeCardExists || tracker.textContent.includes('...')) { tracker.textContent = `🚉 ${t.selectRoute}`; }
            const langBtn = document.getElementById('langToggle');
            if (langBtn) { langBtn.textContent = lang === 'en' ? 'ಕನ್ನಡ' : 'English'; }
        }
        function createLanguageToggle() {
            return `<button id="langToggle" onclick="toggleLanguage()" style="position:fixed; top:20px; right:20px; padding:10px 20px; background:linear-gradient(90deg,#21409a,#235aaf); color:white; border:none; border-radius:20px; cursor:pointer; font-weight:600; z-index:100; box-shadow:0 2px 10px rgba(33,64,154,0.3); font-size:14px;">${currentLanguage === 'en' ? 'ಕನ್ನಡ' : 'English'}</button>`;
        }
        function insertLanguageToggle() {
            document.body.insertAdjacentHTML('afterbegin', createLanguageToggle());
        }
        function initLanguage() {
            const savedLang = getLangFromStorage();
            if (savedLang) { currentLanguage = savedLang; } else { const browserLang = navigator.language || navigator.userLanguage; if (browserLang.startsWith('kn')) { currentLanguage = 'kn'; } }
            applyLanguage(currentLanguage);
        }

        // ====================================================
        // CORE METRO DATA AND LOGIC
        // ====================================================

        const greenLine = ["Nagasandra", "Dasarahalli", "Jalahalli", "Peenya Industry", "Peenya", "Goraguntepalya", "Yeshwanthpur", "Sandal Soap Factory", "Mahalaxmi", "Rajajinagar", "Kuvempu Road", "Srirampura", "Majestic", "Chickpete", "K.R. Market", "National College", "Lalbagh", "South End Circle", "Jayanagar", "R.V. Road", "Banashankari", "J.P. Nagar", "Yelechenahalli"];
        const purpleLine = ["Mysore Road", "Deepanjali Nagar", "Attiguppe", "Vijayanagar", "Hosahalli", "Magadi Road", "Majestic", "Sir M. Vishweshwaraiah", "Vidhana Soudha", "Cubbon Park", "M.G. Road", "Trinity", "Halasuru", "Indiranagar", "Swami Vivekananda Road", "Baiyappanahalli"];
        const allStations = [...new Set([...greenLine, ...purpleLine])].sort();
        const stationLines = {};
        greenLine.forEach(st => { if (!stationLines[st]) stationLines[st] = []; stationLines[st].push("Green"); });
        purpleLine.forEach(st => { if (!stationLines[st]) stationLines[st] = []; stationLines[st].push("Purple"); });

        const placesData = {
            "M.G. Road": [{ name: "Brigade Road", type: "Shopping", address: "Near MG Road", distance: "150 m", review: "⭐️⭐️⭐️⭐️" }, { name: "Garuda Mall", type: "Mall", address: "Magrath Road", distance: "0.5 km", review: "⭐️⭐️⭐️⭐️" }, { name: "Cubbon Park", type: "Park", address: "Cubbon Road", distance: "0.7 km", review: "⭐️⭐️⭐️⭐️⭐️" }, { name: "Church Street", type: "Entertainment", address: "Church Street", distance: "500 m", review: "⭐️⭐️⭐️⭐️" }],
            "Indiranagar": [{ name: "100 Feet Road", type: "Shopping", address: "Indiranagar", distance: "300 m", review: "⭐️⭐️⭐️⭐️⭐️" }, { name: "CMH Road", type: "Entertainment", address: "Indiranagar", distance: "600 m", review: "⭐️⭐️⭐️⭐️" }, { name: "Indiranagar Club", type: "Recreation", address: "Club Road", distance: "0.8 km", review: "⭐️⭐️⭐️⭐️" }],
            "Majestic": [{ name: "Kempegowda Bus Station", type: "Transport", address: "Majestic", distance: "100 m", review: "⭐️⭐️⭐️" }, { name: "Railway Station", type: "Transport", address: "Majestic", distance: "200 m", review: "⭐️⭐️⭐️⭐️" }, { name: "City Market", type: "Shopping", address: "Near Majestic", distance: "0.5 km", review: "⭐️⭐️⭐️" }]
        };
        
        function populateStationDropdowns() {
            const sourceSelect = document.getElementById('source');
            const destSelect = document.getElementById('destination');
            const currentSrc = sourceSelect.value;
            const currentDest = destSelect.value;
            sourceSelect.innerHTML = '';
            destSelect.innerHTML = '';

            allStations.forEach(st => {
                const lines = stationLines[st] || [];
                const lineInfo = lines.length > 1 ? ` (${t('interchange')})` : "";
                const displayName = getStationName(st);
                
                const option = `<option value="${st}">${displayName}${lineInfo}</option>`;
                sourceSelect.innerHTML += option;
                destSelect.innerHTML += option;
            });
            sourceSelect.value = currentSrc || allStations[0];
            destSelect.value = currentDest || allStations[1];
        }

        function estimateCrowd(time) {
            if (!time) return "PROMPT";
            const [h] = time.split(":").map(Number);
            if ((h >= 8 && h < 10) || (h >= 18 && h < 20)) return "HIGH";
            if (h >= 10 && h < 17) return "MEDIUM";
            return "LOW";
        }

        function findRoute(src, dest) {
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

        async function showRoute(fetchNewWeather = true) {
            const src = document.getElementById("source").value;
            const dest = document.getElementById("destination").value;
            const time = document.getElementById("time").value;

            const routeInfo = findRoute(src, dest);
            const numStops = routeInfo.route.length - 1;
            let fare = numStops * 10 + 10;
            if (src === dest) fare = 10;

            const travelTime = numStops * 2;
            const [h, m] = time ? time.split(":").map(Number) : [new Date().getHours(), new Date().getMinutes()];
            const arrival = new Date();
            arrival.setHours(h);
            arrival.setMinutes(m + travelTime);
            const arrivalStr = arrival.toTimeString().slice(0, 5);
            const crowdLevelKey = estimateCrowd(time);

            const routeData = {
                src: src, dest: dest, fare: fare, duration: travelTime, stops: numStops, arrivalTime: arrivalStr,
                crowd: getLocalizedCrowd(crowdLevelKey), 
                crowdKey: crowdLevelKey, 
                interchange: routeInfo.interchange, 
                time: time
            };
            
            // 1. Display Route Card and Share Buttons
            document.getElementById("output").innerHTML = getLocalizedRouteOutput(routeData) + getShareButtonsHTML(routeData);

            // 2. Start Tracker
            startTracker(routeInfo);

            // 3. Show Nearby Places
            showPlaces(dest);
            
            // 4. Handle Weather (Async)
            if (fetchNewWeather) {
                const outputDiv = document.getElementById("output");
                // Show loading state
                outputDiv.innerHTML += showWeatherLoading(getStationName(dest)); 
                
                try {
                    const weather = await getWeather(dest);
                    const weatherHTML = displayWeather(weather, getStationName(dest));
                    
                    // Replace loading with actual weather
                    const loadingDiv = outputDiv.querySelector('div[style*="⏳"]');
                    if (loadingDiv) {
                        loadingDiv.outerHTML = weatherHTML;
                    } else {
                        outputDiv.innerHTML += weatherHTML;
                    }
                } catch (error) {
                    console.error('Failed to load weather:', error);
                    // Optionally display a localized error message
                }
            }
        }
        
        function getLocalizedRouteOutput(data) {
            const t = translations[currentLanguage];
            const { src, dest, stops, fare, duration, arrivalTime, crowd, interchange } = data;

            let interchangeMessage = `<span class='badge ok'>${t.directRoute}</span>`;
            if (interchange) {
                interchangeMessage = `<span class='badge inter'>${t.interchangeAt} ${getStationName(interchange)}</span>`;
            }

            return `
                <div class="route-card">
                    <b>${t.route}:</b> ${getStationName(src)} ➝ ${getStationName(dest)} <br>
                    <b>${t.stops}:</b> ${stops}<br>
                    <b>${t.fare}:</b> ₹${fare}<br>
                    <b>${t.duration}:</b> ${duration} ${t.mins}<br>
                    <b>${t.expectedArrival}:</b> ${arrivalTime}<br>
                    <b>${t.crowd}:</b> ${crowd}<br>
                    <b>${t.interchange}:</b> ${interchangeMessage}
                </div>
            `;
        }

        function startTracker(routeInfo) {
            let currentIndex = 0;
            renderTracker(routeInfo, currentIndex);

            clearInterval(window.trackerInterval);
            window.trackerInterval = setInterval(() => {
                currentIndex++;
                if (currentIndex >= routeInfo.route.length) {
                    clearInterval(window.trackerInterval);
                    document.getElementById("tracker").innerHTML += `<p style='text-align:center; margin-top:10px;'>✅ ${t('trainReached')}</p>`;
                    return;
                }
                renderTracker(routeInfo, currentIndex);
            }, 2000);
        }

        function renderTracker(routeInfo, currentIndex) {
            const interchangeIdx = routeInfo.interchange ? routeInfo.route.indexOf(routeInfo.interchange) : -1;

            document.getElementById("tracker").innerHTML = routeInfo.route.map((st, i) => {
                let lineIndicator = "";
                if (routeInfo.interchange) {
                    const lineName = i <= interchangeIdx ? routeInfo.line1 : routeInfo.line2;
                    lineIndicator = `<span class="line-indicator">[${lineName} ${t('route')}]</span>`;
                } else {
                    lineIndicator = `<span class="line-indicator">[${routeInfo.line} ${t('route')}]</span>`;
                }

                return `
                    <div class="station-step">
                        <div class="dot ${i === currentIndex ? 'active' : ''}"></div> 
                        ${getStationName(st)}${i === interchangeIdx ? ' 🔄' : ''}
                        ${lineIndicator}
                    </div>
                `;
            }).join("");
        }

        function showPlaces(station) {
            const places = placesData[station] || [
                { name: `${station} Mall`, type: "Mall", address: `Near ${station} Metro`, distance: "0.8 km", review: "⭐️⭐️⭐️" },
                { name: "Metro Cafe", type: "Cafe", address: `Exit Gate, ${station}`, distance: "200 m", review: "⭐️⭐️⭐️⭐️" },
                { name: `${station} Park`, type: "Park", address: `Station Road, ${station}`, distance: "0.5 km", review: "⭐️⭐️⭐️" }
            ];
            
            const categories = [...new Set(places.map(p => p.type))];

            document.getElementById("filterBtns").innerHTML = categories.map(c =>
                `<button onclick="filterPlaces('${c}','${station}')" id="btn-${c}">${t(c.toLowerCase().replace(/\s/g, '')) || c}</button>`).join("");

            const firstButton = document.querySelector('.filter-btns button');
            if (firstButton) firstButton.classList.add('active');
            
            renderPlacesWithDirections(places, station);
        }

        function filterPlaces(category, station) {
            const allPlaces = placesData[station] || [
                { name: `${station} Mall`, type: "Mall", address: `Near ${station} Metro`, distance: "0.8 km", review: "⭐️⭐️⭐️" },
                { name: "Metro Cafe", type: "Cafe", address: `Exit Gate, ${station}`, distance: "200 m", review: "⭐️⭐️⭐️⭐️" },
                { name: `${station} Park`, type: "Park", address: `Station Road, ${station}`, distance: "0.5 km", review: "⭐️⭐️⭐️" }
            ];
            const filtered = allPlaces.filter(p => p.type === category);
            
            document.querySelectorAll('.filter-btns button').forEach(x => x.className = "");
            const activeBtn = document.getElementById('btn-' + category);
            if(activeBtn) activeBtn.className = "active";
            
            renderPlacesWithDirections(filtered, station);
        }

        function renderPlacesWithDirections(list, station) {
            document.getElementById("places").innerHTML = list.map(p => `
                <div class='place'>
                    <b>${p.name}</b> (${t(p.type.toLowerCase().replace(/\s/g, '')) || p.type})<br>
                    📍 ${p.address} — ${p.distance}<br>
                    ${t('review')}: ${p.review}<br>
                    <button onclick="showWalkingDirections('${station}', '${p.name}')"
                            style="margin-top:8px; padding:6px 12px; background:#ffa726;
                                    color:white; border:none; border-radius:6px;
                                    cursor:pointer; font-size:13px; width:100%;">
                        🚶 ${t('walkingDirections')}
                    </button>
                </div>`).join("");
        }
        
        // ====================================================
        // WALKING DIRECTIONS MODULE
        // ====================================================

        const walkingDirections = {
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

        function getWalkingDirections(station, place) {
            const directions = walkingDirections[station]?.[place];
            if (!directions) { return generateGenericDirections(place); }
            return formatDirections(directions, place);
        }

        function formatDirections(directions, placeName) {
            const t = translations[currentLanguage];
            let html = `
                <div style="margin-top:15px; padding:16px; background:#fff8e1; border-radius:12px;
                             border-left:4px solid #ffa726; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
                    <h4 style="margin:0 0 10px 0; color:#e65100; display:flex; align-items:center;">
                        <span style="font-size:20px; margin-right:8px;">🚶</span>
                        ${t.walkingTo} ${placeName}
                    </h4>
                    <div style="display:flex; gap:15px; margin-bottom:12px; font-size:14px;">
                        <div style="background:white; padding:8px 12px; border-radius:6px; flex:1;">
                            <div style="color:#666; font-size:12px;">${t.distance}</div>
                            <div style="font-weight:bold; color:#e65100;">${directions.distance}</div>
                        </div>
                        <div style="background:white; padding:8px 12px; border-radius:6px; flex:1;">
                            <div style="color:#666; font-size:12px;">${t.time}</div>
                            <div style="font-weight:bold; color:#e65100;">${directions.duration}</div>
                        </div>
                        <div style="background:white; padding:8px 12px; border-radius:6px; flex:1;">
                            <div style="color:#666; font-size:12px;">${t.exit}</div>
                            <div style="font-weight:bold; color:#e65100; font-size:12px;">${directions.exit}</div>
                        </div>
                    </div>
                    <div style="margin:12px 0;">
                        <div style="font-weight:600; margin-bottom:8px; color:#333;">📍 ${t.directions}:</div>
                        <ol style="margin:0; padding-left:20px; line-height:1.8;">
                            ${directions.steps.map(step => `<li style="margin:5px 0;">${step}</li>`).join('')}
                        </ol>
                    </div>
                    <div style="margin-top:12px; padding:10px; background:white; border-radius:6px;">
                        <div style="font-weight:600; margin-bottom:5px; color:#333;">🏛️ ${t.landmarks}:</div>
                        <div style="font-size:13px; color:#555;">
                            ${directions.landmarks.map(lm => `• ${lm}`).join('<br>')}
                        </div>
                    </div>
                    <button onclick="openInMaps('${placeName}')"
                            style="margin-top:12px; width:100%; padding:10px; background:#4285f4;
                                   color:white; border:none; border-radius:6px; cursor:pointer;
                                   font-weight:600;">
                        🗺️ ${t.openInMaps}
                    </button>
                </div>
            `;
            return html;
        }

        function generateGenericDirections(place) {
            const t = translations[currentLanguage];
            return `
                <div style="margin-top:15px; padding:16px; background:#f5f5f5; border-radius:12px;
                             border-left:4px solid #9e9e9e;">
                    <h4 style="margin:0 0 10px 0; color:#616161;">
                        🚶 ${t.walkingTo} ${place}
                    </h4>
                    <p style="margin:8px 0; font-size:14px; color:#666;">
                        ${t.genericDirections} ${place}. ${t.askStaff}
                    </p>
                    <button onclick="openInMaps('${place}')"
                            style="margin-top:10px; padding:10px 16px; background:#4285f4;
                                   color:white; border:none; border-radius:6px; cursor:pointer;">
                        🗺️ ${t.openInMaps}
                    </button>
                </div>
            `;
        }

        function openInMaps(placeName) {
            const query = encodeURIComponent(placeName + " Bangalore");
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

            // Corrected Google Maps URL structure
            const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

            if (isMobile) {
                // Try to open in native maps app (less reliable than web link)
                window.location.href = `geo:0,0?q=${query}`;
                
                // Fallback to Google Maps web after short delay
                setTimeout(() => {
                    window.open(mapUrl, '_blank');
                }, 500);
            } else {
                // Desktop - open in new tab
                window.open(mapUrl, '_blank');
            }
        }

        function showWalkingDirections(station, place) {
            const directionsHTML = getWalkingDirections(station, place);
            
            let modal = document.getElementById('walkingDirectionsModal');
            if (!modal) {
                 modal = document.createElement('div');
                 modal.id = 'walkingDirectionsModal';
                 document.body.appendChild(modal);
            }

            modal.innerHTML = `
                <div style="position:fixed; top:0; left:0; width:100%; height:100%;
                             background:rgba(0,0,0,0.5); z-index:1000; display:flex;
                             align-items:center; justify-content:center; padding:20px;"
                     onclick="closeDirectionsModal()">
                    <div style="background:white; max-width:500px; width:100%;
                               border-radius:16px; max-height:90vh; overflow-y:auto;
                               padding:20px; box-shadow:0 10px 40px rgba(0,0,0,0.3);"
                          onclick="event.stopPropagation()">
                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                            <h3 style="margin:0; color:#333;">${t('walkingDirections')}</h3>
                            <button onclick="closeDirectionsModal()"
                                    style="background:none; border:none; font-size:24px;
                                           cursor:pointer; color:#999;">×</button>
                        </div>
                        ${directionsHTML}
                    </div>
                </div>
            `;
        }

        function closeDirectionsModal() {
            const modal = document.getElementById('walkingDirectionsModal');
            if (modal) { modal.remove(); }
        }

        // ====================================================
        // WEATHER INTEGRATION MODULE
        // ====================================================

        const WEATHER_API_KEY = 'https://openweathermap.org/api'; 
        const stationCoordinates = {
            "Majestic": { lat: 12.9767, lon: 77.5719 },  "M.G. Road": { lat: 12.9759, lon: 77.6061 },  "Indiranagar": { lat: 12.9783, lon: 77.6408 },  "Yeshwanthpur": { lat: 13.0281, lon: 77.5376 },  "Banashankari": { lat: 12.9250, lon: 77.5480 },  "Vidhana Soudha": { lat: 12.9796, lon: 77.5909 },  "Cubbon Park": { lat: 12.9764, lon: 77.5984 },  "J.P. Nagar": { lat: 12.9081, lon: 77.5858 },  "Baiyappanahalli": { lat: 12.9989, lon: 77.6566 }
        };

        async function getWeather(stationName) {
            const coords = stationCoordinates[stationName] || { lat: 12.9716, lon: 77.5946 };
            if (WEATHER_API_KEY === 'YOUR_API_KEY_HERE') {
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

        function displayWeather(weather, stationName) {
            const t = translations[currentLanguage];
            const advice = getWeatherAdvice(weather);

            return `
                <div style="margin-top:15px; padding:15px; background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                             border-radius:12px; color:white; box-shadow:0 4px 15px rgba(102,126,234,0.4);">
                    <div style="display:flex; align-items:center; justify-content:space-between;">
                        <div>
                            <div style="font-size:24px; margin-bottom:5px;">${weather.icon}</div>
                            <div style="font-size:14px; opacity:0.9;">${t.weatherAt} ${stationName}</div>
                        </div>
                        <div style="text-align:right;">
                            <div style="font-size:32px; font-weight:bold;">${weather.temp}°C</div>
                            <div style="font-size:12px; opacity:0.8;">${t.feelsLike} ${weather.feelsLike}°C</div>
                        </div>
                    </div>
                    <div style="margin-top:12px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.3); font-size:13px;">
                        <div style="margin:5px 0;">🌡️ ${weather.description}</div>
                        <div style="margin:5px 0;">💧 ${t.humidity}: ${weather.humidity}%</div>
                        <div style="margin:5px 0;">💨 ${t.wind}: ${weather.windSpeed} m/s</div>
                        ${advice}
                    </div>
                </div>
            `;
        }

        function getWeatherAdvice(weather) {
            const t = translations[currentLanguage];
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
        }

        function showWeatherLoading(stationName) {
            const t = translations[currentLanguage];
            return `
                <div style="margin-top:15px; padding:15px; background:#f0f0f0; border-radius:12px; text-align:center;">
                    <div style="font-size:20px;">⏳</div>
                    <div style="margin-top:8px; color:#666;">${t.loadingWeather} ${stationName}...</div>
                </div>
            `;
        }
        
        // ====================================================
        // SHARE JOURNEY MODULE FUNCTIONS
        // ====================================================
     function getShareButtonsHTML(routeData) {
            // Stringify and replace double quotes with HTML entity
            const jsonRouteData = JSON.stringify(routeData).replace(/"/g, '&quot;'); 
            
            return `
                <div style="margin-top:15px; text-align:center;">
                    <button onclick="shareJourney('${jsonRouteData}')" style="width:auto; margin:5px; padding:10px 16px; background:#4CAF50; border:none; border-radius:8px; color:white; cursor:pointer; font-size:14px; font-weight:bold;">📤 Share Journey</button>
                    <button onclick="shareViaWhatsApp('${jsonRouteData}')" style="width:auto; margin:5px; padding:10px 16px; background:#25D366; border:none; border-radius:8px; color:white; cursor:pointer; font-size:14px;">📱 WhatsApp</button>
                    <button onclick="shareViaTwitter('${jsonRouteData}')" style="width:auto; margin:5px; padding:10px 16px; background:#1DA1F2; border:none; border-radius:8px; color:white; cursor:pointer; font-size:14px;">🐦 Twitter</button>
                </div>
            `;
        }

        function parseRouteData(routeData) {
             if (typeof routeData === 'string') {
                try {
                    // Replace HTML entity back to quotes for proper JSON parsing
                    routeData = JSON.parse(routeData.replace(/&quot;/g, '"')); 
                } catch (e) {
                    console.error("Failed to parse routeData:", e);
                    return null;
                }
            }
            return routeData;
        }

        function shareJourney(routeData) {
            routeData = parseRouteData(routeData);
            if (!routeData) return;

            const { src, dest, fare, duration, stops, arrivalTime } = routeData;
            const shareText = `🚇 Namma Metro Journey Plan\n\n📍 From: ${getStationName(src)}\n📍 To: ${getStationName(dest)}\n🎫 Fare: ₹${fare}\n⏱️ Duration: ${duration} ${t('mins')}\n🚉 Stops: ${stops}\n🕐 Arrival: ${arrivalTime}\n${getLocalizedCrowd(routeData.crowdKey)}\n\nPlan your metro journey at Namma Metro Assistant!`;

            if (navigator.share) {
                navigator.share({ title: 'My Metro Journey', text: shareText })
                .catch((error) => {
                    if (error.name !== 'AbortError') { 
                        console.error('Error sharing, falling back to copy:', error);
                        copyToClipboard(shareText);
                    }
                });
            } else {
                copyToClipboard(shareText);
            }
        }

        function shareViaWhatsApp(routeData) {
            routeData = parseRouteData(routeData);
            if (!routeData) return;
            
            const { src, dest, fare, duration, stops, arrivalTime } = routeData;
            const message = encodeURIComponent(`🚇 *Namma Metro Journey Plan*\n\n📍 From: ${getStationName(src)}\n📍 To: ${getStationName(dest)}\n🎫 Fare: ₹${fare}\n⏱️ Duration: ${duration} ${t('mins')}\n🚉 Stops: ${stops}\n🕐 Arrival: ${arrivalTime}\n${getLocalizedCrowd(routeData.crowdKey)}\n\nPlan your trip at Namma Metro Assistant!`);
            
            window.open(`https://wa.me/?text=${message}`, '_blank');
        }

        function shareViaTwitter(routeData) {
            routeData = parseRouteData(routeData);
            if (!routeData) return;
            
            const { src, dest, duration } = routeData;
            const tweet = encodeURIComponent(`Just planned my metro trip from ${getStationName(src)} to ${getStationName(dest)}! Only ${duration} ${t('mins')} journey. Check out my route! 🚇 #NammaMetro #Bengaluru`);
            
            window.open(`https://twitter.com/intent/tweet?text=${tweet}`, '_blank');
        }
        
        function copyToClipboard(text) {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification(`${t('journeyCopied')} 📋`);
                }).catch(err => {
                    console.error('Failed to copy using clipboard API, trying fallback:', err);
                    fallbackCopy(text);
                });
            } else {
                fallbackCopy(text);
            }
        }

        function fallbackCopy(text) {
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
                    showNotification(`${t('journeyCopied')} 📋`);
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

        function showNotification(message) {
            const existingNotification = document.querySelector('.share-notification');
            if (existingNotification) {
                document.body.removeChild(existingNotification);
            }
            
            const notification = document.createElement('div');
            notification.className = 'share-notification';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            requestAnimationFrame(() => {
                notification.classList.add('show');
            });
            
            const transitionDuration = 300; 
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => { 
                    if (document.body.contains(notification)) { 
                        document.body.removeChild(notification); 
                    } 
                }, transitionDuration);
            }, 3000);
        }

        function showEmergencyContacts(){
  document.getElementById("emergencyBox").style.display="block";
}
function hideEmergencyContacts(){
  document.getElementById("emergencyBox").style.display="none";
}

    // “Have you packed?” alert logic
function acknowledgePacking(ready) {
  let res = document.getElementById("packingResponse");
  if(ready){
    res.textContent = "Great! Have a safe and enjoyable metro journey!";
    res.style.color = "#218838";
  } else {
    res.textContent = "Please pack all your essentials before you leave. Safety first!";
    res.style.color = "#d32f2f";
  }
}

        // Playlist selection and YouTube/Spotify embedding
function showPlaylist(type) {
  let playerDiv = document.getElementById("player");
  playerDiv.innerHTML = "";
  if(type === "youtube") {
    playerDiv.innerHTML = `<iframe width="100%" height="163" src="https://www.youtube.com/embed/videoseries?list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj" 
    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  } else if(type === "spotify") {
    playerDiv.innerHTML = 
      `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator" 
         width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>`;
  }
}

        // ====================================================
        // INITIALIZATION
        // ====================================================
        document.addEventListener('DOMContentLoaded', () => {
            insertLanguageToggle();
            initLanguage();
            populateStationDropdowns();
        });
    