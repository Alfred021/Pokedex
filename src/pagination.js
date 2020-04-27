/* eslint-disable linebreak-style */
import { updatePokemonList } from './api.js';

export default function switchPages(list) {
  const nextUrl = list.next;
  const previousUrl = list.previous;
  const $next = document.querySelector('#next');
  const $previous = document.querySelector('#previous');
  const $list = document.querySelector('#pokemon-list');

  $next.addEventListener('click', () => {
    if (nextUrl === null) {
      return;
    }
    $list.innerHTML = '';
    console.log(nextUrl);
    updatePokemonList(nextUrl);
  });

  $previous.addEventListener('click', () => {
    if (previousUrl === null) {
      return;
    }
    $list.innerHTML = '';
    console.log(previousUrl);
    updatePokemonList(previousUrl);
  });
}
