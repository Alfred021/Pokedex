function getPokemon(initialUrl) {
  return fetch(initialUrl)
    .then((resp) => resp.json())
    .then((resp) => resp.results)
}

function listOfPokemon(pokemons) {
  const $list = document.querySelector('#pokemon-list')
  const $info = document.querySelector('#info-pokemon')

  pokemons.forEach((pokemon) => {
    const name = pokemon.name
    let url = pokemon.url

    const $item = document.createElement('a');
    $item.textContent = name;
    $item.href = '#';
    $item.classList.add('list-group-item', 'list-group-item-action')
    $item.addEventListener('click', () => {
      $info.classList.remove('hidden');
      const $activeItem = document.querySelector('.active');
      if ($activeItem) {
        $activeItem.classList.remove('active');
      }
      $item.classList.add('active')

      getPokemonInfo(url) 
    });

    $list.appendChild($item);
  });

  return $list;
}

function getPokemonInfo(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((pokemon) => {
      showPokemonInfo(pokemon);
    });
}

function showPokemonInfo(pokemon) {
  const $pokemonName = document.querySelector('#pokemon-name');
  const $pokemonImage = document.querySelector('#pokemon-image');
  const $pokemonweight = document.querySelector('#pokemon-weight');
  const $pokemonheight = document.querySelector('#pokemon-height');
  const name = pokemon.name;
  const weight = pokemon.weight;
  const height = pokemon.height;
  const image = pokemon.sprites.front_default;

  $pokemonName.textContent = name;
  $pokemonImage.setAttribute('src', image);
  $pokemonweight.textContent = `Weight: ${weight / 10}kg`;
  $pokemonheight.textContent = `Height: ${height /10}m`;

  showPokemonType(pokemon);
  showPokemonSkills(pokemon);
}   

function showPokemonSkills(pokemon) {
  const $skillList = document.querySelector('#skill-list');
  $skillList.innerHTML = '';
  const pokeSkills = pokemon.abilities

  pokeSkills.forEach((skill) => {
    const url = skill.ability.url
    const name = skill.ability.name
    fetch(url)
      .then((resp) => resp.json())
      .then((resp) => {
        const skillsTexts = resp.flavor_text_entries;

        for (let i=0; i < skillsTexts.length; i++) {
          if (i === 3) break
          if (skillsTexts[i].language.name === 'en') {
            const skillDescriptionText = skillsTexts[i].flavor_text;

            const $skillListPokemon = document.createElement('li');
            $skillListPokemon.classList.add('list-group-item')
            const $skillName = document.createElement('p');
            $skillName.textContent = name + ':';
            $skillListPokemon.appendChild($skillName);

            const $skillDescripcion = document.createElement('p');
            $skillDescripcion.textContent = skillDescriptionText;
            $skillName.appendChild($skillDescripcion);

            $skillList.appendChild($skillListPokemon)
          }
        }
      });
  });

}

function showPokemonType(pokemon) {
  const $pokemonType = document.querySelector('#pokemon-type')
  $pokemonType.innerHTML = '';
  const pokemonTypes = pokemon.types;

  pokemonTypes.forEach((type) => {
    const typeName = type.type.name
    const $item = document.createElement('li');
    $item.textContent = typeName;
    $pokemonType.appendChild($item);
  });
}

function configureSearchBar() {
  const $nav = document.querySelector('nav');
  const $search = document.querySelector('#search');
  const $listElement = document.querySelector('#pokemon-list')
  $listElement.addEventListener('click', () => {
    $nav.classList.remove('hidden')
  });
  $search.addEventListener('click', (event) => {
    const pokemon = document.querySelector('input[type=search]').value.toLocaleLowerCase();
    getPokemonInfo(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    event.preventDefault;
  });
}

function setUp(offset) {
  const $nav= document.querySelector('nav');
  $nav.classList.add('hidden')
  const $next = document.querySelector('#next');
  const $previous = document.querySelector('#previous')
  const $list = document.querySelector('#pokemon-list');
  const limit = 500;

  $next.addEventListener('click', () => {
    let offset = 0;
    if (offset >= 0 || offset >= 500) {
      offset += 500;
      $list.innerHTML = ''
      return setUp(offset)
    } else {
      return setUp(offset)
    }
  });

  $previous.addEventListener('click', () => {
    if (offset !=0 || offset <= 500) {
      offset -= 500
      $list.innerHTML= '';
      return setUp(offset)
    } else {
      return setUp(offset)
    }
  });

  initialUrl = `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
  getPokemon(initialUrl)
    .then((pokemons) => {
      listOfPokemon(pokemons);
    });
  configureSearchBar()    
}

setUp()

