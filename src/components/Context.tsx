import React, { createContext, useState, useContext, useEffect } from "react";

// Define the type of the context value
interface WeatherContextType {
  weather: string;
  location: string;
  changeWeather: () => void;
  changeLocation: (location: string) => void;
}

// Initialize the context with the defined type
export const WeatherContext = createContext<WeatherContextType | null>(null);

const Context = ({ defaultLocation }: { defaultLocation: string }) => {
  // State for storing weather data
  const [weather, setWeather] = useState("");
  // State for storing location
  const [location, setLocation] = useState(defaultLocation);

  // Simulate fetching weather data from an API
  useEffect(() => {
    const fetchWeather = () => {
      // Emojis corresponding to different weathers
      const emojiWeatherData: Record<string, string> = {
        Tallinn: "🌞", // Sunny
        London: "🌧️", // Rainy
        NewYork: "❄️", // Snowy
      };

      // Set the weather based on the selected location
      setWeather(emojiWeatherData[location]);
    };

    fetchWeather();
  }, [location]);

  // Function to change weather
  const changeWeather = () => {
    setWeather((prevWeather) => {
      // Toggle between different weather emojis
      if (prevWeather === "🌞") return "🌧️";
      else if (prevWeather === "🌧️") return "❄️";
      else return "🌞";
    });
  };

  // Function to change location
  const changeLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  // Provide the weather data and functions to child components
  return (
    <WeatherContext.Provider value={{ weather, location, changeWeather, changeLocation }}>
      <WeatherDisplay />
    </WeatherContext.Provider>
  );
};

// Component to display weather
const WeatherDisplay = () => {
  // Access weather data and functions from context
  const { weather, location, changeWeather, changeLocation } = useContext(WeatherContext)!;

  return (
    <div style={styles.card}>
      <h2>Weather in {location}</h2>
      <div style={styles.weather}>{weather}</div>
      <button style={styles.button} onClick={changeWeather}>
        Change Weather
      </button>
      <LocationSelector changeLocation={changeLocation} />
    </div>
  );
};

// Component to select location
interface LocationSelectorProps {
  changeLocation: (location: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ changeLocation }) => {
  // Function to handle location change
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLocation(e.target.value);
  };

  // Render a dropdown to select location
  return (
    <div style={styles.locationSelector}>
      <label>Select Location: </label>
      <select style={styles.select} onChange={handleLocationChange}>
        <option value="Tallinn">Tallinn</option>
        <option value="London">London</option>
        <option value="NewYork">New York</option>
      </select>
    </div>
  );
};

// Styles
const styles = {
  card: {
    padding: '20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
  },
  weather: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginRight: '10px',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
  },
  locationSelector: {
    marginTop: '20px',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px',
  },
};

export default Context;
