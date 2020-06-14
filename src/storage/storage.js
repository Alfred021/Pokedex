/* eslint-disable linebreak-style */
export function savePokemonListOnStorage(url, pokemon) {
  try {
    localStorage.setItem(url, JSON.stringify(pokemon));
  } catch (e) {
    localStorage.clear();
    localStorage.setItem(url, JSON.stringify(pokemon));
  }
}

export function getPokemonListFromStorage(url) {
  const pokemonList = JSON.parse(localStorage.getItem(url));
  if (pokemonList === null) {
    throw new Error('PokemonList not found in Storage');
  }
  return pokemonList;
}

export function savePokemonInfoOnStorage(pokemon) {
  if (pokemon === undefined) {
    throw new Error('Pokemon is undefined');
  }
  try {
    localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
  } catch (error) {
    localStorage.clear();
    localStorage.setItem(pokemon.name, JSON.stringify(pokemon));
  }
}

export function getPokemonInfoFromStorage(name) {
  const pokemonInfo = JSON.parse(localStorage.getItem(name));
  if (pokemonInfo === null) {
    throw new Error('PokemonInfo not found in Storage');
  }
  return pokemonInfo;
}
