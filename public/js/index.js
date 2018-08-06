// import Timer from './Timer.js';
import loadSheet from './SpriteSheet.js';
import Renderer from './Renderer.js';
import Planet from './entities/Planet.js';

const context = canvas.getContext('2d');

loadSheet('sprites').then((sheet) => {
  const renderer = new Renderer(sheet);
  renderer.sprites.push(Planet.fromList(Object.keys(sheet.legend.planet)));
  renderer.draw(context);
});
