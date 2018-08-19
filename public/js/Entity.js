/** represents an image on the canvas */
export default class Entity {
  /**
   * @param {string} sprite name of sprite image
   */
  constructor(sprite) {
    this.sprite = sprite;
    this.pos = {x: 0, y: 0};
  }
}
