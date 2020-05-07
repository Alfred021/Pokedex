/* eslint-disable linebreak-style */
import {
  getPokemonInfoFromStorage,
  getPokemonListFromStorage,
  savePokemonListOnStorage,
  savePokemonInfoOnStorage,
} from './storage.js';
import {
  getPokemonFromApi,
  getPokemonList,
} from './api.js';
import {
  showPokemonInfo,
} from './ui.js';

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

async function getPokemonsInfo(name) {
  try {
    const pokemon = getPokemonInfoFromStorage(name);
    return pokemon;
  } catch (e) {
    const pokemonInfo = await getPokemonFromApi(name);
    savePokemonInfoOnStorage(pokemonInfo);
    return pokemonInfo;
  }
}

export async function showPokemonInfoFromService(name) {
  const pokemon = await getPokemonsInfo(name);
  showPokemonInfo(pokemon);
}
