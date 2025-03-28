import { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import video from "./video.mp4";

function App() {
  // State variables to manage weather data, loading status, and error messages
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // API Key and URL for fetching weather data
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  // Function to fetch weather data based on city name
  const fetchWeather = async (city) => {
    setLoading(true); // Set loading state to true while fetching
    setError(""); // Clear previous errors
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const res = await axios.get(url);
      console.log(res.data); // Log response data for debugging
      setWeather(res.data); // Update weather state with fetched data
    } catch (error) {
      // Handle errors based on response status
      if (error.res && error.res.status === 404) {
        setError("City not Found . Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeather(null); // Reset weather state on error
    } finally {
      setLoading(false); // Reset loading state after request completes
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag
      </video>
      {/* Dark overlay to improve readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-1"></div>
      {/* Main content container */}
      <div className="bg-black/75 text-white rounded-lg shadow-lg p-8 max-w-md w-full z-1000">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
        {/* Search bar component */}
        <SearchBar fetchWeather={fetchWeather} />
        {/* Display loading message when fetching data */}
        {loading && (
          <p className="text-center mt-4 font-semibold">Loading...</p>
        )}
        {/* Display error message if any */}
        {error && (
          <p className="text-red-600 text-center mt-4 font-semibold">{error}</p>
        )}
        {/* Display weather information when data is available */}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
