/**
 * represents an image displayed on the canvas
 */
export default class Sprite {
  /**
   * @param {String} name indentifier for rendering
   * @param {Array<Number>} pos of the sprite on the canvas
   * @param {Array<Number>} size of the sprite's image [width, height]
   */
  constructor(name, pos = [0, 0], size = [48, 48]) {
    this.name = name;
    this.pos = pos;
    this.size = size;
  }
}
