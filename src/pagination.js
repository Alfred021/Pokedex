/* eslint-disable linebreak-style */

export function switchPages(nextUrl, previousUrl, callback) {
  const $next = document.querySelector('#next');
  const $previous = document.querySelector('#previous');
  const $list = document.querySelector('#pokemon-list');

  $next.addEventListener('click', () => {
    if (nextUrl.next === null) {
      return;
    }
    $list.innerHTML = '';
    callback(nextUrl);
  });

  $previous.addEventListener('click', () => {
    if (previousUrl === null) {
      return;
    }
    if (next === null) {
      previousUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=940&limit=20';
      callback(previousUrl);
    }
    $list.innerHTML = '';
    callback(previousUrl);
  });
}
