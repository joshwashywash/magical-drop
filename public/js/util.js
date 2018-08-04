/**
 * flattens a multidimensional array into one dimension
 * @param {Array} array to flatten
 * @return {Array} the flattened array
 */
export function flatten(array) {
  return array.reduce((prev, curr) => prev.concat(curr), []);
}
