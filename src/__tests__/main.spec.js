/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import setUp from '../main.js';
import bodyFixture from '../fixtures/pokemon.fixture.js';
import JsonList from '../fixtures/pokemonlist-1.json';

test('Setup Pokedex', async () => {
  document.body.innerHTML = bodyFixture;

  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((resp) => {
        resp(JsonList);
      });
      resolve({ json: () => jsonPromise });
    }));

  await setUp('https://pokeapi.co/api/v2/pokemon/');
  expect(document.querySelector('nav').className).toContain('hidden');
  await expect(global.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/');
  await expect(document.querySelectorAll('#pokemon-list .list-group-item')).toHaveLength(20);
});
