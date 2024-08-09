import axios from 'axios';

const API_URL = 'https://pokeapi.co/api/v2/pokemon';

// Fetches a list of Pokémon with pagination support
export const fetchPokemonList = async (offset = 0, limit = 20) => {
  try {
    const response = await axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
    console.log('API Response:', response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokémon list', error);
    return { results: [] }; // Return an empty results array on error
  }
};
