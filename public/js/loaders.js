/**
 * @param {String} name of json file
 * @return {Promise<JSON>}
 */
export function loadJSON(name) {
  return fetch(`./json/${name}.json`).then((resp) => resp.json());
}

/**
 * @param {String} path to image file
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
