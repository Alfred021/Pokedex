/* eslint-disable linebreak-style */
import {
  getPokemonInfoFromStorage,
  getPokemonListFromStorage,
  savePokemonListOnStorage,
  savePokemonInfoOnStorage,
} from './storage.js';

import {
  getPokemon,
  getPokemonList as getPokemonInfo,
} from './api.js';

export async function getPokemonsFromList(url) {
  try {
    const pokemonList = getPokemonListFromStorage(url);
    return pokemonList;
  } catch (e) {
    const pokemonList = await getPokemon(url);
    savePokemonListOnStorage(pokemonList);
    console.log(pokemonList);
    return pokemonList;
  }
}

export async function getPokemonsInfo(url) {
  try {
    const pokemonInfo = getPokemonInfoFromStorage(url);
    return pokemonInfo;
  } catch (e) {
    const pokemonInfo = await getPokemonInfo(url);
    savePokemonInfoOnStorage(pokemonInfo);
    console.log(pokemonInfo);
    return pokemonInfo;
  }
}
