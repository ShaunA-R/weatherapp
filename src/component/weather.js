import React from 'react';

const WeatherInfo = ({ name, icon, description, temperature, humidity, wind }) => {
  const weatherIconUrl = icon ? `https://openweathermap.org/img/w/${icon}.png` : '';

  return (
    <div>
      <h2>Current Weather for {name}</h2>
      <div>
        {icon && <img src={weatherIconUrl} alt={description} />}
        <span>{Math.round(temperature)}&deg;C</span>
      </div>
      <div>
        <p>{description}</p>
        <p>Humidity: {humidity}%</p>
        <p>Wind: {wind} m/s</p>
      </div>
    </div>
  );
};

export default WeatherInfo;

