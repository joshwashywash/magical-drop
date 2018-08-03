// import Timer from './Timer.js';
import loadSheet from './SpriteSheet.js';

const context = canvas.getContext('2d');

loadSheet('spritesheet').then((sheet) => {
  sheet.draw('blue', context);
});
