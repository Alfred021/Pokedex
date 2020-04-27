/* eslint-disable linebreak-style */
import {
  showPokemonInfo,
  getListOfPokemon,
} from './ui.js';

export async function getPokemonList(url) {
  const mainUrl = url;
  const apiResp = await fetch(mainUrl);
  const apiRespJson = await apiResp.json();
  return apiRespJson;
}

export async function getPokemon(url) {
  const mainUrl = url;
  const apiResp = await fetch(mainUrl);
  const apiRespJson = await apiResp.json();
  return apiRespJson.results;
}

async function updateButtons(list) {
  let next = list.next;
  let previous = list.previous;
}

export async function updatePokemonList(url) {
  const newPokemonResults = await getPokemon(url);
  const newPokemonList = getPokemonList(url);
  updateButtons(newPokemonList);
  getListOfPokemon(newPokemonResults);
}

export async function getPokemonInfo(url) {
  const pokemonUrl = url;
  const apiResp = await fetch(pokemonUrl);
  const apiRespJson = await apiResp.json();
  const pokemon = apiRespJson;
  return showPokemonInfo(pokemon);
}

export function configureSearchBar() {
  const $search = document.querySelector('#search');
  $search.addEventListener('click', () => {
    const pokemon = document.querySelector('input[type=search]').value.toLocaleLowerCase();
    return getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  });
  return undefined;
}
