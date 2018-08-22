import {loadSheet} from './sheet.js';
import {createRenderer} from './renderer.js';

const main = async () => {
  const renderer = await loadSheet('sheet').then(createRenderer);
  console.log(renderer);
};

main();
