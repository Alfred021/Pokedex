/* eslint-disable linebreak-style */
export default function switchPages(nextUrl, previousUrl, callback) {
  const $next = document.querySelector('#next');
  const $previous = document.querySelector('#previous');
  const $list = document.querySelector('#pokemon-list');

  $next.onclick = () => {
    if (nextUrl === null) {
      return;
    }
    $list.innerHTML = '';
    callback(nextUrl);
  };

  $previous.onclick = () => {
    if (previousUrl === null) {
      return;
    }
    if (nextUrl === null) {
      callback(previousUrl = 'https://pokeapi.co/api/v2/pokemon/?offset=940&limit=20');
    }
    $list.innerHTML = '';
    callback(previousUrl);
  };
}
