import Entity from '../Entity.js';
import {canvas} from '../canvas.js';

const bounds = {
  top: 0,
  right: canvas.width,
  bottom: canvas.height,
  left: 0,
};

/**
 * intended to follow the singleton pattern thru module export
 */
class Juggler extends Entity {
  /**
   * @param {string} sprite name for renderer
  */
  constructor() {
    super('idle');
    this.y = bounds.bottom - this.height;
    this.x = (bounds.right - this.width) / 2;
  }
  /**
   * @param {number} amount (+) -> move right, (-) -> move left
   */
  move(amount) {
    this.x += amount;
    // check if beyond canvas bounds
    if (this.x < bounds.left || this.x + this.width > bounds.right) {
      this.x -= amount;
    }
  }
}

export default new Juggler();
