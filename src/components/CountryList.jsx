import CountryCard from "./CountryCard";

function CountryList({ countries }) {
  // Show loading if no data
  if (countries.length === 0) {
    return <p>Loading or No countries found...</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "10px",
        width: "100%",         
        boxSizing: "border-box", 
        overflow: "hidden"      
      }}
    >
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
}

export default CountryList;