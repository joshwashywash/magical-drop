import {loadImage, loadJSON} from './loaders.js';

/**
 * @param {String} name hint for loading sheet image
 * @return {Promise<SpriteSheet>}
 */
export default function loadSheet(name) {
  return loadJSON(name).then((spec) => {
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
   * @param {Image} image of all sprites
   * @param {Object} map of sprites to coordinates
   */
  constructor(image, map) {
    this.image = image;
    this.map = new Map(Object.entries(map));
  }
}
