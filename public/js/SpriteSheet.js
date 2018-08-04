import {loadJSON, loadImage} from './loaders.js';
import {flatten} from './util.js';

/**
 * @param {String} name hint for loading spec
 * @return {Promise<SpriteSheet>}
 */
export default function loadSheet(name) {
  return loadJSON(`./json/${name}.json`).then((spec) => {
    return loadImage(spec.url).then((image) => {
      return new SpriteSheet(image, spec.map);
    });
  });
}

/**
 * acts as a texture atlas
 */
class SpriteSheet {
  /**
   * @constructs SpriteSheet
   * @param {Image} image of all sprites
   * @param {Object} map contains mappings of all sprites within the sheet
   */
  constructor(image, map) {
    this.image = image;
    /**
     * @prop {Map} map string to position in sheet
     */
    this.map = new Map(flatten(Object.values(map)));
  }
}
