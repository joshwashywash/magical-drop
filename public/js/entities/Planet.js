import Sprite from '../Sprite.js';
import {loadJSON} from '../loaders.js';
import {randomElem} from '../util.js';

/**
 * loads planet entity spec
 * @return {Object} with property to create functions
 */
export default function loadPlanet() {
  const name = 'planet';
  return loadJSON(name).then((spec) => {
    return {
      [name]: () => new Planet(randomElem(spec.sprites), spec.size),
    };
  });
}

/**
 * defines behavior of the planet entity
 */
class Planet extends Sprite {
      /**
       * @param {String} name of its sprite image
       * @param {Array<Number>} size read from its json
       */
      constructor(name, size) {
        super(name, size);
      }
    }
