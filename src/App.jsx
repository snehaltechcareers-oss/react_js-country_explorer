import { useState, useEffect } from 'react'
import './App.css'
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';

function App() {
// Store all countries
  const [countries, setCountries] = useState([]);

  // Store search text
  const [search, setSearch] = useState("");

  // Fetch API data
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,cca3,capital,currencies,region")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error(err));
  }, []);

  // Filter countries based on search input
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Country Explorer</h1>

      {/* Search Component */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Country List Component */}
      <CountryList countries={filteredCountries} />
    </div>
  );
}

export default App
