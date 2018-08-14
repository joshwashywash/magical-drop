import Timer from './Timer.js';
import loadSheet from './SpriteSheet.js';
import Renderer from './Renderer.js';
import loadEntities from './factory.js';

/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');

/** @param {CanvasRenderingContext2D} context of canvas */
async function main(context) {
  const [sheet, factory] = await Promise.all([
    loadSheet('sprites'),
    loadEntities(),
  ]);
  const renderer = new Renderer(sheet);
  renderer.sprites.push(factory.juggler());
  const timer = new Timer(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    renderer.draw(context);
  });
  timer.start();
}

main(canvas.getContext('2d'));
