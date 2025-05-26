# Real-Time Location Tracking App

A real-time location tracking application built with Node.js, Express, Socket.IO, and Leaflet maps. This application allows users to share their location in real-time and view other users' locations on an interactive map.

## Features

- Real-time location tracking using browser's Geolocation API
- Interactive map display using Leaflet.js
- Real-time updates using Socket.IO
- Multiple user support with unique markers
- Automatic marker cleanup on user disconnect

## Implementation Steps

1. Check if the browser supports geolocation
2. Set options for high accuracy, a 5-second timeout, and no caching
3. Use watchPosition to track the users location continuously
4. Emit the latitude and longitude via a socket with "send-location"
5. Initialize a map centered at coordinates (0, 0) with a zoom level of 15 using Leaflet
6. Create an empty object for markers
7. When receiving location data via the socket, extract id, latitude, and longitude, and center the map on the new coordinates
8. If a marker for the id exists, update its position; otherwise, create a new marker at the given coordinates and add it to the map
9. When a user disconnects, remove their marker from the map and delete it from markers

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Modern web browser with geolocation support

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tampurus/real-time-tracking-app.git
   cd real-time-tracking-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node app.js
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Tech Stack

- **Backend:**
  - Node.js
  - Express.js
  - Socket.IO

- **Frontend:**
  - HTML/CSS
  - JavaScript
  - Leaflet.js (for maps)
  - Socket.IO Client

## Project Structure
real-time-tracking-app/
├── app.js # Main server file
├── package.json # Project dependencies
├── public/ # Static files
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── script.js
└── views/
└── index.ejs # Main view template

## Important Notes

- The application requires location permissions from the browser
- Location accuracy may vary based on:
  - Device GPS capabilities
  - Environmental factors (indoor/outdoor)
  - Browser settings
  - Network connectivity

## Contributing

Feel free to fork this repository and submit pull requests. You can also open issues for bugs or feature requests.

