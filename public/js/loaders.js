/**
 * @typedef {Object} entityspec information about entity
 * @prop {string[]} frames sprite image names
 * @prop {[number, number]} size [width, height] of its image
 */

 /**
  * @typedef {Object} sheetspec information about spritesheet
  * @prop {[number, number]} offset [xoffset, yoffset] between sprites
  * @prop {Object<string, [number, number]>} map from image name to pos of image
  */

/**
 * @param {string} name of json file
 * @return {Promise<spritespec | sheetspec>} loaded json
 */
export function loadJSON(name) {
  return fetch(`./json/${name}.json`).then((resp) => resp.json());
}

/**
 * @param {string} path to image file
 * @return {Promise<Image>}
 */
export function loadImage(path) {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = path;
  });
}

/**
 * @typedef {object} entity
 * @prop {string} name of its image within SpriteSheet
 * @prop {[number, number]} size [width, height] of its image
 * @prop {[number, number]} pos [x, y] coordinate on canvas
 */

/**
 * loads the entity's constructor onto an object
 * @param {string} name of the JSON file
 * @param {function(spec): entity} fromSpec returns an instance of the entity
 * @return {Promise<{name: fromSpec}>} the object can only create the entity
 */
export function loadEntity(name, fromSpec) {
  return loadJSON(name).then((spec) => {
    return {
      [name]: () => fromSpec(spec),
    };
  });
}
