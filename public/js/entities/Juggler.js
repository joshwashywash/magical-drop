import Sprite from '../Sprite.js';
import {loadEntity} from '../loaders.js';

/** @typedef {{name: Juggler.fromSpec}} JugglerFactory */

/** @return {Promise<JugglerFactory>} resolves with Juggler */
export default function loadJuggler() {
  return loadEntity('juggler', Juggler.fromSpec);
}

/** represents player on game screen */
class Juggler extends Sprite {
  /**
   * @param {string} name of sprite image
   * @param {[number, number]} size [width, height] of sprite
   */
  constructor(name, size) {
    super(name, size);
  }

  /** @typedef {import('../loaders.js').entityspec} spec */

  /**
   * @param {spec} spec
   * @return {Juggler} created from loaded spec
   */
  static fromSpec(spec) {
    return new Juggler(spec.frames[0], spec.size);
  }
}
