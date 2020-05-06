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
  getListOfPokemon,
} from './ui.js';
import { updateButtons } from './pagination.js';

async function getPokemonsFromList(url) {
  try {
    return getPokemonListFromStorage(url);
  } catch (e) {
    const pokemonList = await getPokemonList(url);
    const pokemonListResults = pokemonList.results;
    savePokemonListOnStorage(url, pokemonListResults);
    return pokemonListResults;
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

export async function updatePokemonList(url) {
  const newPokemonResults = await getPokemonsFromList(url);
  const newPokemonUrl = await getPokemonList(url);
  updateButtons(newPokemonUrl);
  getListOfPokemon(newPokemonResults);
}
