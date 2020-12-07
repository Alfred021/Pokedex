/* eslint-disable linebreak-style */
import { showPokemonInfo } from './ui.js';

export default async function configureSearchBar() {
  const $search = document.querySelector('#search');
  $search.onclick = () => {
    const pokemon = document.querySelector('input[type=search]').value.toLocaleLowerCase();
    showPokemonInfo(pokemon);
  };
  return undefined;
}
