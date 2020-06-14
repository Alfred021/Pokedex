/* eslint-disable linebreak-style */
import { getPokemonsInfo } from '../service/service.js';
import pokemonGeneralInfo from '../class.js';

function showPokemonSkills(pokemonInfo) {
  const $skillList = document.querySelector('#skill-list');
  $skillList.innerHTML = '';
  const pokeSkills = pokemonInfo.skills;

  pokeSkills.forEach((skill) => {
    const { name } = skill.ability;
    const $skillListPokemon = document.createElement('li');
    $skillListPokemon.textContent = `${name}`;
    $skillList.appendChild($skillListPokemon);
  });
}

function showPokemonType(pokemonInfo) {
  const $pokemonType = document.querySelector('#pokemon-type');
  $pokemonType.innerHTML = '';
  const pokemonTypes = pokemonInfo.types;

  pokemonTypes.forEach((type) => {
    const typeName = type.type.name;
    const $item = document.createElement('li');
    $item.textContent = typeName;
    $pokemonType.appendChild($item);
  });
}

function showPokemonStats(pokemonInfo) {
  const $statsList = document.querySelector('#stats-List');
  $statsList.innerHTML = '';
  const pokemonStats = pokemonInfo.stats;

  pokemonStats.forEach((stat) => {
    const baseStat = stat.base_stat;
    const statName = stat.stat.name;
    const $item = document.createElement('li');
    $item.textContent = `${statName}: ${baseStat}`;
    $statsList.appendChild($item);
  });
}

export function showPokemonInfo(pokemon) {
  const $pokemonName = document.querySelector('#pokemon-name');
  const $pokemonImage = document.querySelector('#pokemon-image');
  const $pokemonweight = document.querySelector('#pokemon-weight');
  const $pokemonheight = document.querySelector('#pokemon-height');
  const pokemonInfo = new pokemonGeneralInfo(pokemon);

  $pokemonName.textContent = `No.${pokemonInfo.id} ${pokemonInfo.name.toUpperCase()}`;
  $pokemonImage.setAttribute('src', pokemonInfo.image);
  $pokemonweight.textContent = `Weight: ${pokemonInfo.weight / 10}kg`;
  $pokemonheight.textContent = `Height: ${pokemonInfo.height / 10}m`;

  showPokemonType(pokemonInfo);
  showPokemonSkills(pokemonInfo);
  showPokemonStats(pokemonInfo);
}

export async function getListOfPokemon(pokemons) {
  const $nav = document.querySelector('nav');
  const $list = document.querySelector('#pokemon-list');
  const $info = document.querySelector('#info-pokemon');

  pokemons.forEach((pokemon) => {
    const { name } = pokemon;
    const $item = document.createElement('a');
    $item.textContent = name;
    $item.href = '#';
    $item.classList.add('list-group-item', 'list-group-item-action');
    $item.addEventListener('click', async () => {
      $info.classList.remove('hidden');
      const $activeItem = document.querySelector('.active');
      if ($activeItem) {
        $activeItem.classList.remove('active');
      }
      $item.classList.add('active');
      $nav.classList.remove('hidden');
      const pokemonInfo = await getPokemonsInfo(name);
      showPokemonInfo(pokemonInfo);
    });

    $list.appendChild($item);
  });

  return $list;
}

export async function configureSearchBar() {
  const $search = document.querySelector('#search');
  $search.onclick = async () => {
    const pokemon = document.querySelector('input[type=search]').value.toLocaleLowerCase();
    const pokemonInfo = await getPokemonsInfo(pokemon);
    showPokemonInfo(pokemonInfo);
  };
  return undefined;
}
