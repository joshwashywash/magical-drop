import {canvas} from '../canvas.js';

const createJuggler = (sprite) => {
  return {
    sprite,
    pos: {
      x: (canvas.width - sprite.width) / 2,
      y: canvas.height - sprite.height,
    },
    /** @param {number} amount (-) == left, (+) == right */
    move(amount) {
      this.pos.x += amount;
      if (this.pos.x < 0 || this.pos.x + this.sprite.width > canvas.width) {
        this.pos.x -= amount;
      }
    },
  };
};

export {createJuggler};
