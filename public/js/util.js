/**
 * @param {Array} array to choose from
 * @return {*} a random element from the array
 */
export function randomElem(array) {
  return array[Math.floor(Math.random() * array.length)];
}
