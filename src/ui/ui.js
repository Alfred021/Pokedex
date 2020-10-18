import { getPokemon } from '../service/service.js';

function showPokemonSkills(skills) {
  const $skillList = document.querySelector('#skill-list');
  $skillList.innerHTML = '';

  skills.forEach((skill) => {
    const $skillListPokemon = document.createElement('li');
    $skillListPokemon.textContent = `${skill}`;
    $skillList.appendChild($skillListPokemon);
  });
}

function showPokemonType(types) {
  const $pokemonType = document.querySelector('#pokemon-type');
  $pokemonType.innerHTML = '';

  types.forEach((type) => {
    const $item = document.createElement('li');
    $item.textContent = type;
    $pokemonType.appendChild($item);
  });
}

function showPokemonStats(stats) {
  const $statsList = document.querySelector('#stats-List');
  $statsList.innerHTML = '';

  stats.forEach((stat) => {
    const { name, stat: statData } = stat;
    const $item = document.createElement('li');
    $item.textContent = `${name}: ${statData}`;
    $statsList.appendChild($item);
  });
}

export function showPokemonInfo(pokemon) {
  const {
    id,
    name,
    weight,
    height,
    image,
    types,
    skills,
    stats,
  } = pokemon;

  const $pokemonName = document.querySelector('#pokemon-name');
  const $pokemonImage = document.querySelector('#pokemon-image');
  const $pokemonweight = document.querySelector('#pokemon-weight');
  const $pokemonheight = document.querySelector('#pokemon-height');

  $pokemonName.textContent = `No.${id} ${name.toUpperCase()}`;
  $pokemonImage.setAttribute('src', image);
  $pokemonweight.textContent = `Weight: ${weight / 10}kg`;
  $pokemonheight.textContent = `Height: ${height / 10}m`;

  showPokemonType(types);
  showPokemonSkills(skills);
  showPokemonStats(stats);
}

export async function getListOfPokemon(pokemons) {
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
      const pokemonInfo = await getPokemon(name);
      showPokemonInfo(pokemonInfo);
    });

    $list.appendChild($item);
  });

  return $list;
}

async function searchPokemonFromUserInput() {
  const $info = document.querySelector('#info-pokemon');
  $info.classList.remove('hidden');
  const pokemon = document.querySelector('input').value.toLocaleLowerCase();
  const pokemonInfo = await getPokemon(pokemon);
  showPokemonInfo(pokemonInfo);
}

export async function configureSearchBar() {
  const $search = document.querySelector('#search');
  const $input = document.querySelector('input');
  $search.onclick = async () => {
    searchPokemonFromUserInput();
  };
  $input.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
      searchPokemonFromUserInput();
      event.preventDefault();
    }
  });
}
