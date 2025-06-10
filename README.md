# Weather Widget

A compact weather widget that uses the API of the German Weather Service (DWD) to display current weather data and forecasts for various weather stations in Germany.

## Features

- Display of current weather data (temperature, humidity, wind, rain, sunshine duration, etc.)
- 5-day forecast with weather icons
- Select weather station via search function
- Clear presentation in widget format
- Uses the official DWD API

## Installation

1. Clone the repository:

   ```sh
   git clone <REPO-URL>
   cd weather-widget
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start development server:
   ```sh
   npm run start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Production

For production, an Express server is used as a proxy to the DWD API. The server configuration can be found in [`server.js`](server.js).

## Project Structure

- `src/` – React app source code
- `server.js` – Express server for API proxy
- `public/` and `build/` – Static assets and build output

## API

Weather data is fetched via the following route:

```
GET /api/weather?stationId=<STATIONS_ID>
```

The stations and their IDs are listed in [`src/utils/locationData.js`](src/utils/locationData.js).

## Customization

- The default station can be set in [`src/Searchfunction/SearchContext.jsx`](src/Searchfunction/SearchContext.jsx) via the `stationId` value.
- Weather icons are located in [`build/weatherIcons/`](build/weatherIcons/).

## License

This project is licensed under the MIT License.

---

Data source: [Deutscher Wetterdienst (DWD)](https://www.dwd.de)
