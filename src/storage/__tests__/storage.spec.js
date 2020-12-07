/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import {
  savePokemonInfoOnStorage, savePokemonListOnStorage, getPokemonInfoFromStorage, getPokemonListFromStorage,
} from '../storage.js';
import { pokemonInfo } from '../../fixtures/pokemonInfo.json';
import { pokemonlist } from '../../fixtures/pokemonlist-1.json';

/*
test('Manage Pokemon Info with local Storage', () => {
  const pokemonName = 'bulbasaur';

  savePokemonInfoOnStorage(pokemonName, pokemonInfo);
  expect(getPokemonInfoFromStorage(pokemonName)).toEqual(pokemonInfo);
});
*/

test('Manage Errors With Pokemon Info in Local Storage', () => {
  expect(() => {
    savePokemonInfoOnStorage(undefined);
  }).toThrow('Pokemon is undefined');

  expect(() => {
    getPokemonInfoFromStorage(null);
  }).toThrow('PokemonInfo not found in Storage');
});
/*
test('Manage Pokemon Lists with local storage', () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  savePokemonListOnStorage(url, pokemonlist);
  expect(getPokemonListFromStorage(url)).toEqual(pokemonlist);
});
*/
test('Manage Errors with Pokemon Lists in local storage', () => {
  expect(() => {
    getPokemonListFromStorage(null);
  }).toThrow('PokemonList not found in Storage');
});
