import Timer from './Timer.js';
import loadSheet from './SpriteSheet.js';
import Renderer from './Renderer.js';
import loadEntities from './factory.js';

const context = canvas.getContext('2d');

/**
 * main function
 * @param {CanvasRenderingContext2D} context
 */
async function main(context) {
  const [sheet, factory] = await Promise.all([
    loadSheet('sprites'),
    loadEntities(),
  ]);
  const renderer = new Renderer(sheet);
  renderer.sprites.push(factory.planet());
  const timer = new Timer(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    renderer.draw(context);
  });
  timer.start();
}

main(context);
