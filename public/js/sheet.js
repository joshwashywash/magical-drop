import {loadImage, loadJSON} from './loaders.js';

/** @typedef {object} sheet
 * @prop {Image} sheet.image
 * @prop {Object<string, *>} sheet.sprites
 * @prop {string} sheet.url
 */

/**
 * @param {string} name hint for loading spec
 * @return {Promise<sheet>}
 */
export default loadSheet = (name) => {
  return loadJSON(name).then((spec) => {
    return loadImage(spec.url).then((image) => {
      return Object.assign(spec, {image: image});
    });
  });
};
