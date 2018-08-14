import loadPlanet from './entities/Planet.js';
import loadJuggler from './entities/Juggler.js';

/** @typedef {Object<string, Function>} EntityFactory */

/**
 * combines all factories into one object
 * @return {Promise<EntityFactory>} capable of making any entity
 */
export default function loadEntities() {
  const loads = [loadPlanet, loadJuggler].map((load) => load());
  return Promise.all(loads).then((factories) => {
    return Object.assign({}, ...factories);
  });
}
