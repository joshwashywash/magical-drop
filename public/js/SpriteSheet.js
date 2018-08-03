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
     * @prop {Map<String, Array<Number>>} map String to sheet position
     */
    this.map = new Map(spec.map);
  }
  /**
   * draws the corresponding sprite at the given destination
   * @param {String} name identifier for sprite
   * @param {CanvasRenderingContext2D} context to draw upon
   * @param {Array<Number>} dest coordinates
   */
  draw(name, context, dest = [0, 0]) {
    if (this.map.has(name)) {
      const coords = this.map.get(name).map((coord, i) => {
        return coord * this.size[i % 2];
      });

      context.drawImage(
        this.image,
        ...coords,
        ...this.size,
        ...dest,
        ...this.size
      );
    }
  }
}
