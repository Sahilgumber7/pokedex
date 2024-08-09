import React, { useState, useEffect } from 'react';
import PokedexNavbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import Pagination from './components/Pagination';
import { fetchPokemonList } from './api/api';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const pokemonsPerPage = 50;

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const data = await fetchPokemonList((currentPage - 1) * pokemonsPerPage, pokemonsPerPage);
      console.log('Fetched Pokémon data:', data);
      if (data && data.results) {
        setPokemons(data.results);
      } else {
        setPokemons([]);
      }
      setLoading(false);
    };

    fetchPokemons();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(1281 / pokemonsPerPage); // Adjust total Pokémon count accordingly

  return (
    <div className="min-h-screen bg-gray-100">
      <PokedexNavbar />
      <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
        {loading ? (
          <p className="col-span-full text-center text-lg">Loading...</p>
        ) : (
          pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
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
