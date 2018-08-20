/** represents an image on the canvas */
export default class Entity {
  /**
   * initial position is the topleft corner of the canvas
   * @param {string} sprite name of sprite image
   */
  constructor(sprite) {
    this.sprite = sprite;
    this.x = 0;
    this.y = 0;
    this.width = 48;
    this.height = 48;
  }
}
