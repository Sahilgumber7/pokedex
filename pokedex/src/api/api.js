import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const fetchPokemon = async (pokemonName) => {
  try {
    const response = await axios.get(`${API_URL}/${pokemonName}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon data', error);
    return null;
  }
};

export const fetchPokemonList = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon list', error);
    return null;
  }
};

