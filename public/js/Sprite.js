/** represents an image on the canvas */
export default class Sprite {
  /**
   * @param {string} name of image
   * @param {[number, number]} size [width, height] of image
   * @param {[number, number]} pos [x, y] on canvas
   */
  constructor(name, size, pos = [0, 0]) {
    this.name = name;
    this.size = size;
    this.pos = pos;
  }
}
