import Timer from './Timer.js';
import loadSheet from './sheet.js';
import Renderer from './Renderer.js';
import Entity from './Entity.js';

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

/**
 * main game function
 */
const main = async () => {
  const renderer = await loadSheet('sheet').then((sheet) => {
    return new Renderer(sheet);
  });
  renderer.entities.push(new Entity('white'));
  const timer = new Timer(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    renderer.draw(context);
  });
  timer.start();
};

main();
