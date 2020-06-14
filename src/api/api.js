/* eslint-disable linebreak-style */

export async function getPokemonList(url = 'https://pokeapi.co/api/v2/pokemon/') {
  const apiResp = await fetch(url);
  const apiRespJson = await apiResp.json();
  return apiRespJson;
}

export async function getPokemonFromApi(name) {
  const apiResp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const apiRespJson = await apiResp.json();
  return apiRespJson;
}
