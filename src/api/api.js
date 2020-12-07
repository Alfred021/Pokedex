/* eslint-disable linebreak-style */

export async function getPokemonList(url = 'https://pokeapi.co/api/v2/pokemon/') {
  const apiResp = await fetch(url);
  return apiResp.json();
}

export async function getPokemonFromApi(name) {
  const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  return apiResp.json();
}
