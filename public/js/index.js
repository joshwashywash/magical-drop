// import Timer from './Timer.js';
import loadSheet from './SpriteSheet.js';
import Renderer from './Renderer.js';
import Sprite from './Sprite.js';

const context = canvas.getContext('2d');

loadSheet('spritesheet').then((sheet) => {
  const renderer = new Renderer(sheet);
  renderer.sprites.push(new Sprite('red', [48, 48]));
  renderer.draw(context);
});
