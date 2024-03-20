import React, { createContext, useState, useContext, useEffect } from "react";

interface ContextProps {
  defaultLocation: string;
}

// Define the type of the context value
interface WeatherContextType {
  weather: string;
  location: string;
  changeWeather: () => void;
  changeLocation: (location: string) => void;
}

// Initialize the context with the defined type
export const WeatherContext = createContext<WeatherContextType | null>(null);

const Context: React.FC<ContextProps> = ({ defaultLocation }) => {
  const [weather, setWeather] = useState("");
  const [location, setLocation] = useState(defaultLocation);

  useEffect(() => {
    const fetchWeather = () => {
      const emojiWeatherData: Record<string, string> = {
        Tallinn: "🌞",
        London: "🌧️",
        NewYork: "❄️",
      };
      setWeather(emojiWeatherData[location]);
    };

    fetchWeather();
  }, [location]);

  const changeWeather = () => {
    setWeather((prevWeather) => {
      if (prevWeather === "🌞") return "🌧️";
      else if (prevWeather === "🌧️") return "❄️";
      else return "🌞";
    });
  };

  const changeLocation = (newLocation: string) => {
    setLocation(newLocation);
  };

  return (
    <WeatherContext.Provider value={{ weather, location, changeWeather, changeLocation }}>
      <WeatherDisplay />
    </WeatherContext.Provider>
  );
};

const WeatherDisplay = () => {
  const { weather, location, changeWeather, changeLocation } = useContext(WeatherContext)!;

  return (
    <div>
      <h2>Weather in {location}</h2>
      <div>{weather}</div>
      <button onClick={changeWeather}>Change Weather</button>
      <LocationSelector changeLocation={changeLocation} />
    </div>
  );
};

interface LocationSelectorProps {
  changeLocation: (location: string) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({ changeLocation }) => {
  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLocation(e.target.value);
  };

  return (
    <div>
      <label>Select Location: </label>
      <select onChange={handleLocationChange}>
        <option value="Tallinn">Tallinn</option>
        <option value="London">London</option>
        <option value="NewYork">New York</option>
      </select>
    </div>
  );
};

export default Context;
