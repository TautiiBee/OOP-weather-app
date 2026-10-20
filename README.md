# OOP Weather App

A small React + TypeScript weather dashboard for Lithuanian weather stations, built to practise object-oriented design patterns.

## What it does

- Loads the list of weather stations from the public [Meteo.lt API](https://api.meteo.lt/).
- **Add** opens a dialog where you pick a station and choose which extra readings to show: humidity, pressure and wind speed.
- Each station you add gets a card showing the station name, the air temperature, the "feels like" temperature, and an icon and code for the current conditions (for example `PARTLY-CLOUDY`), plus the readings you chose.
- The app switches between light and dark themes to match your operating system's setting.

## Design patterns

| Pattern | Where | Role |
| --- | --- | --- |
| **Adapter** | [`src/DisplayWeatherDataAdapter`](src/DisplayWeatherDataAdapter/DisplayWeatherDataAdapter.tsx) | Converts the raw Meteo.lt observation into the props the weather card expects. |
| **Builder** | [`src/WeatherBuilder`](src/WeatherBuilder/WeatherBuilder.tsx) | Adds the optional humidity, pressure and wind speed tiles to a card one by one. |

Other parts:

- [`src/MeteoAPIConnection`](src/MeteoAPIConnection) calls the Meteo.lt API (using axios) and defines the TypeScript types for its responses.
- [`src/WetaherDisplayCard`](src/WetaherDisplayCard) is the weather card component.
- [`src/Client`](src/Client) is the main screen: the Add button, the add-station dialog and the list of cards.
- [`src/theme`](src/theme) holds the design-system values (colours, spacing, shadows, fonts). They feed the Material UI theme and are also available as CSS variables for the SCSS modules.
- [`src/svgIcons`](src/svgIcons) holds the weather and reading icons.

## Running it

### Requirements

- [Node.js](https://nodejs.org/) 18 or newer (tested with Node 20 LTS) and npm.
- An internet connection: the app fetches live data from `api.meteo.lt`. You don't need an API key.

If Node isn't installed, one way to get it without admin rights is [nvm](https://github.com/nvm-sh/nvm):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# open a new terminal, then:
nvm install 20
```

### Install and start

```bash
git clone https://github.com/TautiiBee/OOP-weather-app.git
cd OOP-weather-app
npm ci          # installs the exact dependency versions from package-lock.json
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000) and reloads automatically when you edit a file.

### Other scripts

| Command | What it does |
| --- | --- |
| `npm run build` | Builds an optimised production version into `build/`. |
| `npm test` | Runs the test runner in watch mode. |

To serve a production build locally:

```bash
npm run build
npx serve -s build
```

## Tech stack

React 18, TypeScript, Material UI 5, SCSS modules, axios, Create React App (react-scripts 5).
