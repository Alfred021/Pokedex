/* eslint-disable linebreak-style */
export function savePokemonListOnStorage(url) {
  try {
    localStorage.setItem(url, JSON.stringify(url));
  } catch (e) {
    localStorage.clear();
    localStorage.setItem(url, JSON.stringify(url));
  }
}

export function getPokemonListFromStorage(url) {
  const pokemonList = JSON.parse(localStorage.getItem(url));
  if (pokemonList === null) {
    throw new Error('PokemonList not found in Storage');
  }
  return pokemonList;
}

export function savePokemonInfoOnStorage(url) {
  try {
    localStorage.setItem(url, JSON.stringify(url));
  } catch (e) {
    localStorage.clear();
    localStorage.setItem(url, JSON.stringify(url));
  }
}

export function getPokemonInfoFromStorage(url) {
  const pokemonInfo = JSON.parse(localStorage.getItem(url));
  if (pokemonInfo === null) {
    throw new Error('PokemonInfo not found in Storage');
  }
  return pokemonInfo;
}
