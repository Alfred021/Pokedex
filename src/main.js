/* eslint-disable linebreak-style */
import {
  switchPages,
} from './pagination.js';
import {
  configureSearchBar,
  getPokemonList,
} from './api.js';
import {
  getListOfPokemon,
} from './ui.js';

async function setUp() {
  const $nav = document.querySelector('nav');
  $nav.classList.add('hidden');

  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemons = await getPokemonList(url);
  const pokemonResults = pokemons.results;
  getListOfPokemon(pokemonResults);
  switchPages(pokemons);
}
configureSearchBar();
setUp();
