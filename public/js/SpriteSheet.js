import {loadImage, loadJSON} from './loaders.js';

/**
 * @param {string} name hint for loading sheet image
 * @return {Promise<Sheet>}
 */
export default function loadSheet(name) {
  return loadJSON(name).then((spec) => {
    return loadImage(spec.url).then((image) => {
      return new Sheet(image, spec);
    });
  });
}

/** acts as a texture atlas */
export class Sheet {
  /** @typedef {import('./loaders.js').sheetspec} spec */

  /**
   * @param {Image} image of all sprites
   * @param {spec} spec information about the spritesheet
   */
  constructor(image, spec) {
    this.image = image;
    this.map = new Map(Object.entries(spec.map));
    this.offset = spec.offset;
  }
}
