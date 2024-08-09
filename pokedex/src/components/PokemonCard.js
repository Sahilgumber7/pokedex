import React from 'react';

const PokemonCard = ({ pokemon }) => {
  if (!pokemon || !pokemon.name || !pokemon.url) {
    return <div className="text-center p-4">No Pokémon data available</div>;
  }

  const pokemonId = pokemon.url.split('/')[6]; // Extract Pokémon ID from URL

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200">
      <img 
        className="w-3/4 mx-auto mt-4" 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} 
        alt={pokemon.name} 
      />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2 capitalize text-center">{pokemon.name}</div>
      </div>
    </div>
  );
};

export default PokemonCard;
