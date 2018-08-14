import Sprite from '../Sprite.js';
import {loadEntity} from '../loaders.js';
import {randomElem} from '../util.js';

/** @typedef {{name: Planet.fromSpec}} PlanetFactory */

/** @return {Promise<PlanetFactory>} */
export default function loadPlanet() {
  return loadEntity('planet', Planet.fromSpec);
}

/** defines behavior of the planet entity */
class Planet extends Sprite {
  /**
   * @param {string} name of sprite image
   * @param {[number, number]} size [width, height]
   */
  constructor(name, size) {
    super(name, size);
  }

  /** @typedef {import('../loaders.js').entityspec} spec */

  /**
   * @param {spec} spec parsed JSON
   * @return {Planet} created from the spec
   */
  static fromSpec(spec) {
    return new Planet(randomElem(spec.frames), spec.size);
  }
}
