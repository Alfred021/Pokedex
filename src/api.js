/* eslint-disable linebreak-style */
import {
  showPokemonInfo,
} from './ui.js';
import { showPokemonInfoFromService } from './service.js';

export async function getPokemonList(url = 'https://pokeapi.co/api/v2/pokemon/') {
  const apiResp = await fetch(url);
  const apiRespJson = await apiResp.json();
  return apiRespJson;
}

export async function getPokemonInfo(url) {
  const apiResp = await fetch(url);
  const apiRespJson = await apiResp.json();
  const pokemon = apiRespJson;
  return showPokemonInfo(pokemon);
}

export async function getPokemonFromApi(name) {
  const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const apiRespJson = await apiResp.json();
  return apiRespJson;
}

export async function configureSearchBar() {
  const $search = document.querySelector('#search');
  $search.addEventListener('click', () => {
    const pokemon = document.querySelector('input[type=search]').value.toLocaleLowerCase();
    showPokemonInfoFromService(pokemon);
  });
  return undefined;
}
