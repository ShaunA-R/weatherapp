import './App.css';
import React, { useState } from 'react';
import SearchBar from './component/search';
import Weather from './component/fetch';
import WeatherInfo from './component/weather';

function App() {
  const [city, setCity] = useState('Stockton');
  return (
    <div className="App">
      <SearchBar setCity={setCity} />
      <Weather city={city} />
      <WeatherInfo />
    </div>
  );
}

export default App;

