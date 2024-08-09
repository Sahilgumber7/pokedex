import React, { useState, useEffect } from 'react';
import PokedexNavbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import Pagination from './components/Pagination';
import { fetchPokemonList } from './api/api';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const pokemonsPerPage = 50;

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const data = await fetchPokemonList((currentPage - 1) * pokemonsPerPage, pokemonsPerPage);
      console.log('Fetched Pokémon list:', data);
      if (data && data.results) {
        // As fetchPokemon is not used, we use only the list of Pokémon.
        setPokemons(data.results);
        setFilteredPokemons(data.results);
      } else {
        setPokemons([]);
        setFilteredPokemons([]);
      }
      setLoading(false);
    };

    fetchPokemons();
  }, [currentPage]);

  useEffect(() => {
    const filterPokemons = () => {
      if (searchTerm) {
        setFilteredPokemons(
          pokemons.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      } else {
        setFilteredPokemons(pokemons);
      }
    };

    filterPokemons();
  }, [searchTerm, pokemons]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  const totalPages = Math.ceil(1281 / pokemonsPerPage); // Adjust the total number of Pokémon as needed

  return (
    <div className="min-h-screen bg-gray-100">
      <PokedexNavbar />
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
        {loading ? (
          <p className="col-span-full text-center text-lg">Loading...</p>
        ) : (
          filteredPokemons.length > 0 ? (
            filteredPokemons.map((pokemon) => (
              <PokemonCard 
                key={pokemon.name} // Use a unique key, such as the Pokémon name
                pokemon={pokemon} 
              />
            ))
          ) : (
            <p className="col-span-full text-center text-lg">No Pokémon data available</p>
          )
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
