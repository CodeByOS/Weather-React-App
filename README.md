# Weather App

A simple weather application built using React that allows users to search for weather information by city name. The app fetches weather data from the [OpenWeather API](https://openweathermap.org/) and displays relevant weather details such as temperature, humidity, wind speed, and more.

# Demo

You can try out the Weather App by visiting the live demo [here](https://weather-react-app-os.vercel.app/)

# Screenshots

Here is a screenshot of the Weather App:

![Alt text](./weather-app.png)

## Features

- Search for weather information by city name.
- Displays current weather, including temperature, humidity, wind speed, and weather description.
- Shows additional weather details like visibility, pressure, and sunrise/sunset times.
- Dynamic background video and dark overlay for a visually appealing UI.
- Error handling for invalid city names and other API errors.
- Loading indicator while data is being fetched.

## Technologies Used

- React: A JavaScript library for building user interfaces.

- Axios: A promise-based HTTP client for making API requests to OpenWeather.

- Tailwind CSS: A utility-first CSS framework for styling the app and making it responsive.

- OpenWeather API: Provides weather data for the app.

- Vite: A build tool used to develop and run the application in development mode.

## Installation

To get started with the Weather App, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/CodeByOS/Weather-React-App
cd Weather-React-App
```

### 2. Install dependencies

Ensure you have Node.js and npm installed. Then, run the following command to install the project dependencies:

```bash
npm install
```

### 3. Set up API Key

Create an `.env` file in the root of the project and add your OpenWeather API key like this:

```bash
VITE_API_KEY=your_openweather_api_key
```

You can sign up for a free OpenWeather API key [here](https://openweathermap.org/).

### 4. Run the app

Start the development server by running:

```bash
npm run dev
```

This will launch the app locally. You can now open your browser and visit http://localhost:5173 to interact with the app.
