import { Pokedex } from 'pokeapi-js-wrapper';

const getPokemonData = async (pokemonName) => {
  const P = new Pokedex();

  try {
    const response = await P.getPokemonByName(pokemonName);
    const { name, sprites } = response;

    const pokemonData = {
      name: name,
      image: sprites.front_default,
    };

    return pokemonData;
  } catch (error) {
    console.error(`Error fetching Pokemon data: ${error}`);
    return null;
  }
};

export default getPokemonData;

