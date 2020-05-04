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
    return getPokemonListFromStorage(url);
  } catch (e) {
    const pokemonList = await getPokemon(url);
    savePokemonListOnStorage(pokemonList);
    console.log(pokemonList);
    return pokemonList;
  }
}

export async function getPokemonsInfo(name) {
  try {
    const pokemon = getPokemonInfoFromStorage(name);
    return pokemon;
  } catch (e) {
    const pokemon = await getPokemonInfo(name);
    savePokemonInfoOnStorage(pokemon);
    return pokemon;
  }
}
