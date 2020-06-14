/* eslint-disable linebreak-style */
export default class pokemonGeneralInfo {
  constructor(pokemon) {
    this.name = pokemon.name.toLocaleLowerCase();
    this.id = pokemon.id;
    this.weight = pokemon.weight;
    this.height = pokemon.height;
    this.image = pokemon.sprites.front_default;
    this.types = pokemon.types;
    this.skills = pokemon.abilities;
    this.stats = pokemon.stats;
  }
}
