import {loadJSON, loadImage} from './loaders.js';

/**
 * @param {String} name hint for loading spec
 * @return {Promise<SpriteSheet>}
 */
export default function loadSheet(name) {
  return loadJSON(`./json/${name}.json`).then((spec) => {
    return loadImage(spec.url).then((image) => new SpriteSheet(image, spec));
  });
}

/**
 * acts as a texture atlas
 */
class SpriteSheet {
  /**
   * @constructs SpriteSheet
   * @param {Image} image of all sprites
   * @param {JSON} spec contains sprite data
   */
  constructor(image, spec) {
    this.image = image;
    this.size = spec.size;
    /**
     * @prop {Map} map String to sheet position
     */
    this.map = new Map(spec.map);
  }
}
