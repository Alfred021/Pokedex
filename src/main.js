/* eslint-disable linebreak-style */
import switchPages from './ui/pagination.js';
import {
  getListOfPokemon,
  configureSearchBar,
} from './ui/ui.js';
import {
  getPokemonsFromList,
} from './service/service.js';

export default async function setUp(url) {
  const pokemonList = await getPokemonsFromList(url);
  const nextUrl = pokemonList.next;
  const previousUrl = pokemonList.previous;
  const pokemonListResults = pokemonList.results;
  getListOfPokemon(pokemonListResults);
  switchPages(nextUrl, previousUrl, setUp);
}
configureSearchBar();
