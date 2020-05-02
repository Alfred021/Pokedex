/* eslint-disable linebreak-style */
import { getPokemonsFromList } from './service.js';

let next;
let previous;

export function updateButtons(list) {
  next = list.next;
  previous = list.previous;
}

export function switchPages(list) {
  next = list.next;
  previous = list.previous;
  const $next = document.querySelector('#next');
  const $previous = document.querySelector('#previous');
  const $list = document.querySelector('#pokemon-list');

  $next.addEventListener('click', () => {
    if (next === null) {
      return;
    }
    $list.innerHTML = '';
    console.log(next);
    getPokemonsFromList(next);
  });

  $previous.addEventListener('click', () => {
    if (previous === null) {
      return;
    }
    $list.innerHTML = '';
    console.log(previous);
    getPokemonsFromList(previous);
  });
}
