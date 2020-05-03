/* eslint-disable linebreak-style */
export function savePokemonListOnStorage(lists) {
  lists.forEach((list) => {
    const { name } = list;
    const { url } = list;
    try {
      localStorage.setItem(name, JSON.stringify(url));
    } catch (e) {
      localStorage.clear();
      localStorage.setItem(name, JSON.stringify(url));
    }
  });
  console.log(lists);
}

export function getPokemonListFromStorage(lists) {
  const pokemonList = JSON.parse(localStorage.getItem(lists));
  if (pokemonList === null) {
    throw new Error('PokemonList not found in Storage');
  }
  console.log(lists);
  return pokemonList;
}

export function savePokemonInfoOnStorage(pokemon) {
  try {
    localStorage.setItem(`${pokemon.name}`, JSON.stringify(pokemon));
  } catch (e) {
    localStorage.clear();
    localStorage.setItem(`${pokemon.name}`, JSON.stringify(pokemon));
  }
  console.log(pokemon);
}

export function getPokemonInfoFromStorage(name) {
  const pokemonInfo = JSON.parse(localStorage.getItem(name));
  if (pokemonInfo === null) {
    throw new Error('PokemonInfo not found in Storage');
  }
  console.log(name);
  return pokemonInfo;
}
