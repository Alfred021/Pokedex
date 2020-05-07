/* eslint-disable linebreak-style */
import { showPokemonInfoFromService } from './service.js';

export function getListOfPokemon(pokemons) {
  const $nav = document.querySelector('nav');
  const $list = document.querySelector('#pokemon-list');
  const $info = document.querySelector('#info-pokemon');

  pokemons.forEach((pokemon) => {
    const { name } = pokemon;
    const $item = document.createElement('a');
    $item.textContent = name;
    $item.href = '#';
    $item.classList.add('list-group-item', 'list-group-item-action');
    $item.addEventListener('click', () => {
      $info.classList.remove('hidden');
      const $activeItem = document.querySelector('.active');
      if ($activeItem) {
        $activeItem.classList.remove('active');
      }
      $item.classList.add('active');
      $nav.classList.remove('hidden');
      showPokemonInfoFromService(name);
    });

    $list.appendChild($item);
  });

  return $list;
}

function showPokemonSkills(pokemon) {
  const $skillList = document.querySelector('#skill-list');
  $skillList.innerHTML = '';
  const pokeSkills = pokemon.abilities;

  pokeSkills.forEach((skill) => {
    const { name } = skill.ability;
    const $skillListPokemon = document.createElement('li');
    $skillListPokemon.textContent = `${name}`;
    $skillList.appendChild($skillListPokemon);
  });
}

function showPokemonType(pokemon) {
  const $pokemonType = document.querySelector('#pokemon-type');
  $pokemonType.innerHTML = '';
  const pokemonTypes = pokemon.types;

  pokemonTypes.forEach((type) => {
    const typeName = type.type.name;
    const $item = document.createElement('li');
    $item.textContent = typeName;
    $pokemonType.appendChild($item);
  });
}

function showPokemonStats(pokemon) {
  const $statsList = document.querySelector('#stats-List');
  $statsList.innerHTML = '';
  const pokemonStats = pokemon.stats;
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
  const { name } = pokemon;
  const { id } = pokemon;
  const { weight } = pokemon;
  const { height } = pokemon;
  const image = pokemon.sprites.front_default;

  $pokemonName.textContent = `No.${id} ${name.toUpperCase()}`;
  $pokemonImage.setAttribute('src', image);
  $pokemonweight.textContent = `Weight: ${weight / 10}kg`;
  $pokemonheight.textContent = `Height: ${height / 10}m`;

  showPokemonType(pokemon);
  showPokemonSkills(pokemon);
  showPokemonStats(pokemon);
}

export async function configureSearchBar() {
  const $search = document.querySelector('#search');
  $search.addEventListener('click', () => {
    const pokemon = document.querySelector('input[type=search]').value.toLocaleLowerCase();
    showPokemonInfoFromService(pokemon);
  });
  return undefined;
}
