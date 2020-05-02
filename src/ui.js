/* eslint-disable linebreak-style */
import { getPokemonsInfo } from './service.js';

export function getListOfPokemon(pokemons) {
  const $nav = document.querySelector('nav');
  const $list = document.querySelector('#pokemon-list');
  const $info = document.querySelector('#info-pokemon');

  pokemons.forEach((pokemon) => {
    const { name } = pokemon;
    const { url } = pokemon;
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
      getPokemonsInfo(url);
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
    const { url } = skill.ability;
    const { name } = skill.ability;
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        const skillsTexts = resp.flavor_text_entries;

        for (let i = 0; i < skillsTexts.length; i += 1) {
          if (skillsTexts[i].language.name === 'en') {
            const skillDescriptionText = skillsTexts[i].flavor_text;
            const $skillListPokemon = document.createElement('li');
            $skillListPokemon.classList.add('list-group-item');
            const $skillName = document.createElement('p');
            $skillName.textContent = `${name}:`;
            $skillListPokemon.appendChild($skillName);

            const $skillDescripcion = document.createElement('p');
            $skillDescripcion.textContent = skillDescriptionText;
            $skillName.appendChild($skillDescripcion);

            $skillList.appendChild($skillListPokemon);
            break;
          }
        }
      });
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

export function showPokemonInfo(pokemon) {
  const $pokemonName = document.querySelector('#pokemon-name');
  const $pokemonImage = document.querySelector('#pokemon-image');
  const $pokemonweight = document.querySelector('#pokemon-weight');
  const $pokemonheight = document.querySelector('#pokemon-height');
  const { name } = pokemon;
  const { weight } = pokemon;
  const { height } = pokemon;
  const image = pokemon.sprites.front_default;

  $pokemonName.textContent = name;
  $pokemonImage.setAttribute('src', image);
  $pokemonweight.textContent = `Weight: ${weight / 10}kg`;
  $pokemonheight.textContent = `Height: ${height / 10}m`;

  showPokemonType(pokemon);
  showPokemonSkills(pokemon);
}
