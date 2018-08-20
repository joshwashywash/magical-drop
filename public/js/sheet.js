import {loadImage, loadJSON} from './loaders.js';

/** @typedef {Object} sheet
 * @prop {Image} sheet.image
 * @prop {Object<string, *>} sheet.sprites
 * @prop {string} sheet.url
 */

/**
 * @param {string} name hint for loading spec
 * @return {Promise<sheet>}
 */
const loadSheet = (name) => {
  return loadJSON(name).then((spec) => {
    return loadImage(spec.url).then((image) => {
      return Object.assign(spec, {image: image});
    });
  });
};

export default loadSheet;
