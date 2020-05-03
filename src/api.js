/* eslint-disable linebreak-style */
import {
  showPokemonInfo,
  getListOfPokemon,
} from './ui.js';
import {
  updateButtons,
} from './pagination.js';
import { getPokemonsInfo } from './service.js';

export async function getPokemonList(url) {
  const apiResp = await fetch(url);
  const apiRespJson = await apiResp.json();
  return apiRespJson;
}

export async function getPokemon(url) {
  const apiResp = await fetch(url);
  const apiRespJson = await apiResp.json();
  return apiRespJson.results;
}

export async function updatePokemonList(url) {
  const newPokemonResults = await getPokemon(url);
  const newPokemonList = await getPokemonList(url);
  updateButtons(newPokemonList);
  getListOfPokemon(newPokemonResults);
}

export async function getPokemonInfo(url) {
  const apiResp = await fetch(url);
  const apiRespJson = await apiResp.json();
  const pokemon = apiRespJson;
  return showPokemonInfo(pokemon);
}

export async function configureSearchBar() {
  const $search = document.querySelector('#search');
  $search.addEventListener('click', () => {
    const pokemon = document.querySelector('input[type=search]').value.toLocaleLowerCase();
    getPokemonsInfo(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  });
  return undefined;
}
