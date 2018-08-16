/** represents an image on the canvas */
export default class Sprite {
  /**
   * @param {string} name of image
   * @param {[number, number]} size [width, height] of image
   * @param {{x: number, y: number}} pos x, y coords on canvas
   */
  constructor(name, size, pos = {x: 0, y: 0}) {
    this.name = name;
    this.size = size;
    this.pos = pos;
  }
  /** @return {number} */
  get width() {
    return this.size[1];
  }
  /** @return {number} */
  get height() {
    return this.size[0];
  }
}
