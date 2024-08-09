import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query.toLowerCase());
  };

  return (
    <div className="flex justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for Pokémon..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-80"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
