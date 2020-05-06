/* eslint-disable linebreak-style */

let next;
let previous;

export function updateButtons(url) {
  next = url.next;
  previous = url.previous;
}

export function switchPages(funtion) {
  const $next = document.querySelector('#next');
  const $previous = document.querySelector('#previous');
  const $list = document.querySelector('#pokemon-list');

  $next.addEventListener('click', async () => {
    if (next === null) {
      return;
    }
    $list.innerHTML = '';
    funtion(next);
  });

  $previous.addEventListener('click', async () => {
    if (previous === null) {
      return;
    }
    if (next === null) {
      previous = 'https://pokeapi.co/api/v2/pokemon/?offset=940&limit=20';
      funtion(previous);
    }
    $list.innerHTML = '';
    funtion(previous);
  });
}
