# React Weather App

A modern, responsive weather application built with React, Vite, and Chakra UI.

## Features

- **Real-time Weather Data**: Fetches current weather information using a weather API.
- **Responsive Design**: Built with Chakra UI for a seamless experience on all devices.

## Getting Started

### Normal Setup (Local)

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd weather-app/React-Weather-App
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Environment setup:**

    Get a free API key from [WeatherAPI.com](https://www.weatherapi.com/).
    
    Create a `.env` file in the root directory (based on `.env.development`) and add your API key:

    ```env
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

4. **Run the development server:**

    ```bash
    npm run dev
    ```

### Setup with Docker

The provided `dockerfile` uses a multi-stage build (`node:20-alpine` -> `nginx:alpine`) and serves the app on port `80`.

1. **Build Docker image:**

    ```bash
    docker build -t react-weather-app --build-arg REACT_APP_API_KEY=your_api_key_here -f dockerfile .
    ```

2. **Run Docker container:**

    ```bash
    docker run -d --name react-weather-app -p 8080:80 react-weather-app
    ```

3. **Open app in browser:**

    ```text
    http://localhost:8080
    ```

4. **Stop and remove container (optional):**

    ```bash
    docker stop react-weather-app && docker rm react-weather-app
    ```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally preview the production build.
