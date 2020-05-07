/* eslint-disable linebreak-style */
import {
  switchPages,
} from './pagination.js';
import {
  getListOfPokemon,
  configureSearchBar,
} from './ui.js';
import {
  getPokemonsFromList,
} from './service.js';

async function setUp(url) {
  const $nav = document.querySelector('nav');
  $nav.classList.add('hidden');

  const pokemonList = await getPokemonsFromList(url);
  const nextUrl = pokemonList.next;
  const previousUrl = pokemonList.previous;
  const pokemonListResults = pokemonList.results;
  getListOfPokemon(pokemonListResults);
  switchPages(nextUrl, previousUrl, setUp);
}
configureSearchBar();
setUp();
