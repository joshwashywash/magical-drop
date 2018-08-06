import Sprite from '../Sprite.js';
import {randomElem} from '../util.js';

/**
 * defines behavior of the planet entity
 */
export default class Planet extends Sprite {
  /**
   * @param {String} name of its sprite image
   * @param {Array<Number>} size read from its json
   */
  constructor(name, size) {
    super(name, size);
  }
  /**
   * intended to be constructor from available planet sprites
   * @param {Array<String>} list of names
   * @return {Planet} whose name is randomly chosen from the list
   */
  static fromList(list) {
    return new Planet(randomElem(list));
  }
}
