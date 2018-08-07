/**
 * represents an image displayed on the canvas
 */
export default class Sprite {
  /**
   * @param {String} name indentifier for rendering
   * @param {Array<Number>} size of the sprite's image [width, height]
   * @param {Array<Number>} pos of the sprite on the canvas
   */
  constructor(name, size, pos = [0, 0]) {
    this.name = name;
    this.size = size;
    this.pos = pos;
  }
}
