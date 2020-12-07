/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import { getPokemonFromApi, getPokemonList } from '../api.js';

beforeEach(() => {
  global.fetch = jest.fn();
});

test('Loading Pokemon from API', async () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((resp) => {
      resp({});
    });
    resolve({ json: () => jsonPromise });
  }));

  getPokemonFromApi('pikachu');
  await expect(global.fetch).toBeCalledTimes(1);
  await expect(global.fetch).toBeCalledWith(`https://pokeapi.co/api/v2/pokemon/${'pikachu'}/`);
  await expect(global.fetch).toBeCalledWith(expect.anything());
});

test('Loading PokemonList From API', async () => {
  global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((resp) => {
      resp([]);
    });
    resolve({ json: () => jsonPromise });
  }));

  getPokemonList('https://pokeapi.co/api/v2/pokemon/');
  await expect(global.fetch).toBeCalledTimes(1);
  await expect(global.fetch).toBeCalledWith('https://pokeapi.co/api/v2/pokemon/');
  await expect(global.fetch).toBeCalledWith(expect.anything());
});
