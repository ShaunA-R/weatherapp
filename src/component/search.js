import React, { useState } from 'react';

const SearchBar = ({ setCity }) => {
  const [city, setSearchCity] = useState('Stockton');

  const handleSearch = () => {
    setSearchCity('');
    const newCity = prompt('Enter a city name');
    if (newCity) {
      setCity(newCity);
      setSearchCity(newCity);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    setCity(city);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="city" value={city} onChange={e => setSearchCity(e.target.value)} />
        <button type="submit">Search</button>
        <button type="button" onClick={handleSearch}>Change Location</button>
      </form>
    </div>
  );
};

export default SearchBar;
