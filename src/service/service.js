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

export async function getPokemonsFromList(url) {
  try {
    const pokemonList = getPokemonListFromStorage(url);
    return pokemonList;
  } catch (e) {
    const pokemonList = await getPokemonList(url);
    savePokemonListOnStorage(url, pokemonList);
    return pokemonList;
  }
}

export async function getPokemonsInfo(name) {
  try {
    const pokemon = getPokemonInfoFromStorage(name);
    return pokemon;
  } catch (e) {
    const pokemonInfo = await getPokemonFromApi(name);
    savePokemonInfoOnStorage(pokemonInfo);
    return pokemonInfo;
  }
}
