import React, { useState } from "react";

const SearchBar = ({ fetchWeather }) => {
  // State to store the input city name
  const [city, setCity] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    if (city.trim()) {
      // Ensures input is not empty
      fetchWeather(city); // Calls the function to fetch weather data
      setCity(""); // Clears the input field after submission
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      {/* Input field for entering city name */}
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 p-2 border border-gray-300 rounded-l-lg outline-none border-r-0"
      />
      {/* Submit button */}
      <button
        type="submit"
        className="bg-blue-500 border cursor-pointer p-2 hover:bg-blue-600 border-l-0 rounded-r-lg"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
