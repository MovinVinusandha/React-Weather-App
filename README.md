# React Weather App

A modern, responsive weather application built with React, Vite, and Chakra UI.

## Features

- **Real-time Weather Data**: Fetches current weather information using a weather API.
- **Responsive Design**: Built with Chakra UI for a seamless experience on all devices.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd weather-app
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Environment Setup:**

    Get a free API key from [WeatherAPI.com](https://www.weatherapi.com/).
    
    Create a `.env` file in the root directory (based on `.env.development`) and add your API key:

    ```env
    VITE_WEATHER_API_KEY=your_api_key_here
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

## usageScripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally preview the production build.
