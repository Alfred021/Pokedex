/* eslint-disable linebreak-style */
import Pokemon from '../classes/pokemon.js';
import PokemonStats from '../classes/pokemon_stats.js';

export default function mapPokemon(apiData) {
  const {
    id,
    name,
    weight,
    height,
    sprites: { front_default: image },
    types,
    abilities: skills,
    stats,
  } = apiData;

  return new Pokemon(
    id,
    name,
    weight,
    height,
    image,
    types.map((type) => type.type.name),
    skills.map((skill) => skill.ability.name),
    stats.map((stat) => new PokemonStats(
      stat.stat.name,
      stat.base_stat,
    )),
  );
}
