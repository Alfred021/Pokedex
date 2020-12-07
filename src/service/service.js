/* eslint-disable linebreak-style */
import {
  getPokemonInfoFromStorage,
  getPokemonListFromStorage,
  savePokemonListOnStorage,
  savePokemonInfoOnStorage,
} from '../storage/storage.js';
import {
  getPokemonFromApi,
  getPokemonList,
} from '../api/api.js';
import mapPokemon from '../mappers/pokedex.js';

export async function getPokemonsFromList(url) {
  try {
    return getPokemonListFromStorage(url);
  } catch (e) {
    const pokemonList = await getPokemonList(url);
    savePokemonListOnStorage(url, pokemonList);
    return pokemonList;
  }
}

export async function getPokemon(name) {
  let pokemon;
  try {
    pokemon = getPokemonInfoFromStorage(name);
  } catch (e) {
    const pokemonInfo = await getPokemonFromApi(name);
    pokemon = mapPokemon(pokemonInfo);
    savePokemonInfoOnStorage(pokemon);
  }
  return pokemon;
}
