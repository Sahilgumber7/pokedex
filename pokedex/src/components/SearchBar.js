import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="p-4 text-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for Pokémon..."
        className="border rounded p-2"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
