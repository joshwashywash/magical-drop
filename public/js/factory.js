import loadPlanet from './entities/Planet.js';
import loadJuggler from './entities/Juggler.js';

/**
 * @typedef {object} entity
 * @prop {string} name of its image within SpriteSheet
 * @prop {[number, number]} size [width, height] of its image
 * @prop {[number, number]} pos [x, y] coordinate on canvas
 * @prop {Map<string, Function>=} mappings keymaps for the entity
 */

/**
 * combines all factories into one object
 * @return {Promise<Object<string, entity>>} capable of making any entity
 */
export default function loadEntities() {
  const loads = [loadPlanet, loadJuggler].map((load) => load());
  return Promise.all(loads).then((factories) => {
    return Object.assign({}, ...factories);
  });
}
