import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherInfo from './weather';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '92ed4d135688a5dffbc60dc180b672ea';

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
      .then(response => {
        setWeatherData(response.data);
      })
      .catch(error => console.log(error));
  }, [city, apiKey]);

  return (
    <div>
      {weatherData ? (
        <WeatherInfo
          name={weatherData.name}
          icon={weatherData.weather[0].icon}
          description={weatherData.weather[0].description}
          temperature={weatherData.main.temp - 273.15}
          humidity={weatherData.main.humidity}
          wind={weatherData.wind.speed}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Weather;

