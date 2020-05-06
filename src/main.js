/* eslint-disable linebreak-style */
import {
  switchPages,
  updateButtons,
} from './pagination.js';
import {
  configureSearchBar,
  getPokemonList,
} from './api.js';
import {
  getListOfPokemon,
} from './ui.js';
import { updatePokemonListFromService } from './service.js';

async function updatePokemonList(url) {
  updateButtons(await getPokemonList(url));
  updatePokemonListFromService(url);
}

async function setUp(url) {
  const $nav = document.querySelector('nav');
  $nav.classList.add('hidden');

  const pokemons = await getPokemonList(url);
  const pokemonResults = pokemons.results;
  getListOfPokemon(pokemonResults);
  switchPages(updatePokemonList);
}
configureSearchBar();
setUp();
