import {loadImage, loadJSON} from './loaders.js';

const loadSheet = (name) => {
  return loadJSON(name).then((spec) => {
    return loadImage(spec.url).then((image) => {
      return Object.assign(spec, {image});
    });
  });
};

export {loadSheet};
