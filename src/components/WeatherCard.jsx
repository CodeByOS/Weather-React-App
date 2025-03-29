import React from "react";

const WeatherCard = ({ weather }) => {
  // Convert sunrise and sunset timestamps to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  return (
    <div className="mt-6">
      {/* Display city name and country */}
      <h2 className="text-2xl font-semibold text-center">
        {weather.name}, {weather.sys.country}
      </h2>

      {/* Display weather icon and temperature */}
      <div className="flex justify-center items-center mt-4">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className="w-16 h-16"
        />
        <p className="text-4xl font-bold">{Math.round(weather.main.temp)}°C</p>
      </div>

      {/* Display weather description */}
      <p className="text-center text-gray-400 capitalize">
        {weather.weather[0].description}
      </p>

      {/* Display additional weather details in a grid layout */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Humidity */}
        <div className="text-center">
          <p className="text-gray-400">Humidity</p>
          <p className="font-bold">{weather.main.humidity}%</p>
        </div>

        {/* Wind speed */}
        <div className="text-center">
          <p className="text-gray-400">Wind</p>
          <p className="font-bold">{weather.wind.speed} m/s</p>
        </div>

        {/* Atmospheric pressure */}
        <div className="text-center">
          <p className="text-gray-400">Pressure</p>
          <p className="font-bold">{weather.main.pressure} hPa</p>
        </div>

        {/* Feels like temperature */}
        <div className="text-center">
          <p className="text-gray-400">Feels like</p>
          <p className="font-bold">{Math.round(weather.main.feels_like)}°C</p>
        </div>

        {/* Min Temperature */}
        <div className="text-center">
          <p className="text-gray-400">Min Temp</p>
          <p className="font-bold">{Math.round(weather.main.temp_min)}°C</p>
        </div>

        {/* Max Temperature */}
        <div className="text-center">
          <p className="text-gray-400">Max Temp</p>
          <p className="font-bold">{Math.round(weather.main.temp_max)}°C</p>
        </div>

        {/* Visibility */}
        <div className="text-center">
          <p className="text-gray-400">Visibility</p>
          <p className="font-bold">{weather.visibility / 1000} km</p>
        </div>

        {/* Cloud Coverage */}
        <div className="text-center">
          <p className="text-gray-400">Clouds</p>
          <p className="font-bold">{weather.clouds.all}%</p>
        </div>

        {/* Sunrise Time */}
        <div className="text-center">
          <p className="text-gray-400">Sunrise</p>
          <p className="font-bold">{formatTime(weather.sys.sunrise)}</p>
        </div>

        {/* Sunset Time */}
        <div className="text-center">
          <p className="text-gray-400">Sunset</p>
          <p className="font-bold">{formatTime(weather.sys.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
