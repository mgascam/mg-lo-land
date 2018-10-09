## Prerequisites
* Node v8.12.0 (LTS)
* npm 6.4.1

## Installation

Run `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

### `npm run build:serve`

Serves locally the production build

## Known Issues

The REST endpoint https://media.lottoland.com/api/drawings/euroJackpot does not allow CORS. Please disable CORS browser policy to be able to run this app. 
There is also a Chrome Extension for that purpose:
https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi