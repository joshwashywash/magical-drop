import {loadImage, loadJSON} from './loaders.js';

/**
 * @param {String} name hint for loading sheet image
 * @return {Promise<SpriteSheet>}
 */
export default function loadSheet(name) {
  return loadJSON(`./json/${name}.json`).then((spec) => {
    return loadImage(spec.url).then((image) => {
      return new SpriteSheet(image, spec.legend);
    });
  });
}

/**
 * acts as a texture atlas
 */
class SpriteSheet {
  /**
   * @param {Image} image of all sprites
   * @param {Object} legend contains information about spritesheet layout
   */
  constructor(image, legend) {
    this.image = image;
    this.legend = legend;
  }
  /**
   * @return {Map} Map<sprite name, position in sheet>
   */
  get coordMap() {
    return new Map(Object.values(this.legend).reduce((prev, curr) => {
      return prev.concat(Object.entries(curr));
    }, []));
  }
  /**
   * @param {String} name of sprite
   * @return {Array<Number>} position of sprite
   */
  coordsOf(name) {
    return this.coordMap.get(name);
  }
}
