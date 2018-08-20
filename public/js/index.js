import Timer from './Timer.js';
import loadSheet from './sheet.js';
import Renderer from './Renderer.js';
import juggler from './entities/Juggler.js';
import keymapper from './KeyMapper.js';

keymapper.follow(juggler);
keymapper.listenOn(window);

/**
 * main game function
 */
const main = async () => {
  const renderer = await loadSheet('sheet').then((sheet) => {
    return new Renderer(sheet);
  });
  renderer.entities.push(juggler);
  const timer = new Timer((dt) => {
    renderer.clear();
    renderer.render();
  });
  timer.start();
};

main();
