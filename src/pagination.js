/* eslint-disable linebreak-style */
import { updatePokemonList } from './service.js';

let next;
let previous;

export function updateButtons(url) {
  next = url.next;
  previous = url.previous;
}

export function switchPages(url) {
  next = url.next;
  previous = url.previous;
  const $next = document.querySelector('#next');
  const $previous = document.querySelector('#previous');
  const $list = document.querySelector('#pokemon-list');

  $next.addEventListener('click', () => {
    if (next === null) {
      return;
    }
    $list.innerHTML = '';
    updatePokemonList(next);
  });

  $previous.addEventListener('click', () => {
    if (previous === null) {
      return;
    }
    if (next === null) {
      previous = 'https://pokeapi.co/api/v2/pokemon/?offset=940&limit=20';
      updatePokemonList(previous);
    }
    $list.innerHTML = '';
    updatePokemonList(previous);
  });
}
