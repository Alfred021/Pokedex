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

async function getPokemonsFromList(url) {
  try {
    const pokemonList = getPokemonListFromStorage(url);
    return pokemonList;
  } catch (e) {
    console.log(e);
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

export async function updatePokemonListFromService(url) {
  const newPokemon = await getPokemonsFromList(url);
  getListOfPokemon(newPokemon);
}
