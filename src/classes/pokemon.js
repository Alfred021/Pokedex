/* eslint-disable linebreak-style */

export default class Pokemon {
  constructor(id, name, weight, height, image, types = [], skills = [], stats = []) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.image = image;
    this.types = types;
    this.skills = skills;
    this.stats = stats;
  }
}
