/* eslint-disable linebreak-style */
export function savePokemonListOnStorage(lists) {
  lists.forEach((list) => {
    const { name } = list;
    try {
      localStorage.setItem(name, JSON.stringify(list));
    } catch (e) {
      localStorage.clear();
      localStorage.setItem(name, JSON.stringify(list));
    }
  });
  console.log(lists);
}

export function getPokemonListFromStorage(name) {
  const pokemonList = JSON.parse(localStorage.getItem(name));
  if (pokemonList === null) {
    throw new Error('PokemonList not found in Storage');
  }
  console.log(name);
  return pokemonList;
}

export function savePokemonInfoOnStorage(pokemon) {
  if (pokemon === undefined) {
    throw new Error('Pokemon is undefined');
  }
  try {
    localStorage.setItem(`${pokemon.name}`, JSON.stringify(pokemon));
  } catch (error) {
    localStorage.clear();
    localStorage.setItem(`${pokemon.name}`, JSON.stringify(pokemon));
    console.log(pokemon);
  }
}

export function getPokemonInfoFromStorage(name) {
  const pokemonInfo = JSON.parse(localStorage.getItem(name));
  if (pokemonInfo === null) {
    throw new Error('PokemonInfo not found in Storage');
  }
  console.log(name);
  return pokemonInfo;
}
