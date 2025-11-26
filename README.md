# Namma Metro Assistant - React Version

A modern React-based metro journey planner for Bangalore's Namma Metro.

## Features

- 🚇 Route planning between metro stations
- 🌐 Bilingual support (English & Kannada)
- 🎫 Fare calculation
- ⏱️ Travel time estimation
- 👥 Crowd prediction based on time
- 🗺️ Journey tracking with live updates
- 📍 Nearby places information
- 🚶 Walking directions to popular destinations
- 🌤️ Weather information at destination
- 📤 Share journey details (WhatsApp, Twitter, Clipboard)
- 🚨 Emergency contacts
- 🎒 Pre-travel checklist
- 🎧 Commute playlist integration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Building for Production

Create a production build:
```bash
npm run build
```

## Project Structure

```
metro-journey-tracker/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── EmergencyBox.js
│   │   ├── JourneyTracker.js
│   │   ├── LanguageToggle.js
│   │   ├── MusicPlayer.js
│   │   ├── NearbyPlaces.js
│   │   ├── Notification.js
│   │   ├── PackingAlert.js
│   │   ├── RouteForm.js
│   │   ├── RouteOutput.js
│   │   ├── WalkingDirectionsModal.js
│   │   └── WeatherDisplay.js
│   ├── data/
│   │   ├── constants.js
│   │   └── translations.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Technologies Used

- React 19
- React Hooks (useState, useEffect)
- CSS3
- OpenWeatherMap API (for weather data)
- Google Maps Integration

## Features in Detail

### Language Support
Toggle between English and Kannada with a single click. Language preference is saved locally.

### Route Planning
- Select source and destination stations
- View direct routes or routes with interchange
- See estimated fare, travel time, and stops

### Journey Tracking
- Visual representation of journey progress
- Station-by-station tracking
- Line identification (Green/Purple Line)

### Weather Integration
- Real-time weather at destination station
- Weather-based travel advice
- Temperature, humidity, and wind speed information

### Nearby Places
- Categorized nearby attractions
- Walking directions with detailed steps
- Integration with Google Maps

### Sharing Capabilities
- Share journey via WhatsApp
- Tweet about your journey
- Copy details to clipboard

## Original Vanilla Version

The original vanilla JavaScript version has been preserved in the `old_vanilla_version/` folder.

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
