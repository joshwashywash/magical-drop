import Sprite from '../Sprite.js';
import {loadEntity} from '../loaders.js';
import {bounds} from '../Field.js';

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
  /**
   * if out of bounds, put back on field
   * @param {number} dir 1 -> right, -1 -> left
   */
  move(dir) {
    this.pos.x += dir;
    if (this.pos.x < bounds.left || this.pos.x > bounds.right) {
      this.pos.x -= dir;
    }
  }
  /**
   * uses lexical scoping to bind to a single juggler
   * @return {[string, Function][]}
   */
  get mappings() {
    return [
      ['ArrowLeft', () => this.move(-this.width)],
      ['ArrowRight', () => this.move(this.width)],
    ];
  }
}
