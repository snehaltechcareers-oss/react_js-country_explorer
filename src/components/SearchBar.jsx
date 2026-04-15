import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search country..."
      value={search}
      onChange={(e) => setSearch(e.target.value)} // update state on typing
      style={{
        padding: "10px 0px 10px 2px",
        width: "100%",
        marginBottom: "20px",
        borderRadius: "8px",
      }}
    />
  );
}

export default SearchBar;