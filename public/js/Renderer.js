/**
 * responsible for rendering sprites to context
 */
export default class Renderer {
  /**
   * @param {SpriteSheet} sheet to pull images from
   */
  constructor(sheet) {
    this.sheet = sheet;
  /**
   * @prop {Array<Sprite>} sprites
   */
    this.sprites = [];
  }
  /**
   * draws all sprites to the context at their positions
   * @param {CanvasRenderingContext2D} context to render all sprites to
   */
  draw(context) {
    this.sprites.forEach((sprite) => {
      const coords = this.sheet.map.get(sprite.name);
      if (coords) {
        context.drawImage(
          this.sheet.image,
          ...coords.map((coord, i) => coord * sprite.size[i % 2]),
          ...sprite.size,
          ...sprite.pos,
          ...sprite.size
        );
      }
    });
  }
}
