import * as loaders from './entities/index.js';

/**
 * combines all factories into one object
 * @return {Object} which can create any defined entity
 */
export default function loadEntities() {
  const promises = Object.values(loaders).map((load) => load());
  return Promise.all(promises).then((factories) => {
    return Object.assign({}, ...factories);
  });
}