function CountryCard({ country }) {
    const currency = country.currencies
    ? Object.values(country.currencies)[0]
    : null;

  return (
    <div
      style={{
        display: "flex",          // 👉 horizontal layout
        alignItems: "center",     // 👉 vertical alignment
        gap: "20px",              // 👉 space between flag & content
        border: "1px solid #ccc",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "10px",
      }}
    >
      {/* LEFT: Flag */}
      <img
        src={country.flags.png}
        alt={country.name.common}
        style={{
          width: "120px",
          height: "80px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />

      {/* RIGHT: Info */}
      <div style={{ textAlign: "left" }}>
        <h2 style={{ margin: "0 0 10px 0" }}>
          {country.name.common}
        </h2>

        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
        <p><strong>Region:</strong> {country.region}</p>
        <p>
          <strong>Currency:</strong>{" "}
          {currency ? `${currency.name} (${currency.symbol})` : "N/A"}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;