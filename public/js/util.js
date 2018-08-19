/**
 * @param {Array} array to choose from
 * @return {*} a random element from the array
 */
const randomElem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export {randomElem};
