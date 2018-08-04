/**
 * represents an image displayed on the canvas
 */
export default class Sprite {
  /**
   * @param {String} name to be given to SpriteRenderer
   * @param {Array<Number>} size of the sprite's image [width, height]
   * @param {Array<Number>} pos of the sprite
   */
  constructor(name, size, pos = [0, 0]) {
    this.name = name;
    this.size = size;
    this.pos = pos;
  }
}
