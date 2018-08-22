/**
 * @param {string} name of json file
 * @return {Promise<*>} loaded json
 */
const loadJSON = (name) => {
  return fetch(`./json/${name}.json`).then((resp) => resp.json());
};

/**
 * @param {string} path to image file
 * @return {Promise<Image>}
 */
const loadImage = (path) => {
  return new Promise((resolve) => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = path;
  });
};

// export together to make it clear what is exported
export {loadJSON, loadImage};
