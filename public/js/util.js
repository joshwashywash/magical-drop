/**
 * flattens a multidimensional array into one dimension
 * @param {Array} array to flatten
 * @return {Array} the flattened array
 */
export function flatten(array) {
  return array.reduce((prev, curr) => prev.concat(curr), []);
}

/**
 * @param {Array} array to choose from
 * @return {*} a random element from the array
 */
export function randomElem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
