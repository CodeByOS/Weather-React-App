import { useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const url = `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`;
      const res = await axios.get(url);
      console.log(res.data);
      setWeather(res.data);
    } catch (error) {
      if (error.res && error.res.status === 404) {
        setError("City not Found . Please try again.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center
     bg-blue-100"
    >
      <div className="bg-black/90 text-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Weather App</h1>
        <SearchBar fetchWeather={fetchWeather} />
        {loading && (
          <p className="text-center mt-4 font-semibold">Loading...</p>
        )}
        {error && (
          <p className="text-red-600 text-center mt-4 font-semibold">{error}</p>
        )}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

export default App;
